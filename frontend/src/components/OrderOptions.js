import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import OrderExtra from "./OrderExtra";
import OrderIngredient from "./OrderIngredient";

import currencyFormat from "../utility/Functions";
import { updateItemExtras, updateItemPrice } from '../redux/cart';

const OrderOptions = (props) => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [extras, setExtras] = useState([]);
  const [storedExtras, setStoredExtras] = useState([]);
  const [servingSize, setServingSize] = useState("regular");

  const [cost, setCost] = useState(props.price);

  function handleServingSize(e) {
    setServingSize(e.target.value);
  }

  function handleUpdateExtras(e) {
    var items = [...storedExtras];
    if (e.target.checked && !storedExtras.includes(e.target.value)) {
      items.push(extras.find(extra => extra._id === e.target.value));
    } 
    else {
      items = items.filter(item => item._id !== e.target.value);
    }
    setStoredExtras(items);
  }

  //Retrieve all extras from the database and save it to the extras state
  useEffect(() => {
    const fetchExtras = async () => {
      const response = await axios.get("/api/cart/")
      
      if (response.status === 200) {
        setExtras(response.data)
      }
    }

    fetchExtras();
  }, []);

  //Update local stored extras to match those stored in cart
  useEffect(() => {
    let extras = cartItems.find(item => item.id === props.id).extra;
    if (extras !== undefined) {
      setStoredExtras(extras);
    }
  }, [props.modalOpened])

  // Update local cost based on extra ingredients in storedExtras
  useEffect(() => {
    var extras = [...storedExtras];
    var cost = props.price;

    if (extras.length > 0) {
      extras.forEach((extra) => {
        cost += extra.price;
        setCost(cost);
      })
    }
  }, [storedExtras]);

  return (
    <div className="modal fade" id={`orderOptions-${props.id}`} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content bg-dark">
          <div className="modal-header border-bottom border-warning border-3">
            <h3 className="modal-title display-6 text-warning fw-bold">{props.name}</h3>
          </div>
          <div className="modal-body bg-secondary">
            <section className="p-2">
              <h4 className="border-1 border-bottom text-warning pb-2">Serving Size</h4>
              <form>
                <div className="row">
                  <div className="col form-check py-2 ms-3">
                    <input className="form-check-input" name="servingRadio" checked={servingSize === 'regular'} value='regular' onChange={handleServingSize} type="radio"/>
                      <label className="form-check-label ms-1 text-white">
                        Regular
                      </label>
                  </div>
                  <div className="col form-check py-2">
                    <input className="form-check-input" name="servingRadio" checked={servingSize === 'large'} value='large' onChange={handleServingSize} type="radio"/>
                      <label className="form-check-label ms-1 text-white">
                        Large
                      </label>
                  </div> 
                </div>  
              </form>
            </section>
            <section className="p-2">
              <h4 className="border-1 border-bottom text-warning pb-2">Ingredients</h4>
              <OrderIngredient name="Beef Patty"/>
              <OrderIngredient name="Cheese"/>
              <OrderIngredient name="Tomato"/>
              <OrderIngredient name="Onion"/>
            </section>
            <section className="p-2">
              <h4 className="border-1 border-bottom text-warning pb-2">Extras</h4>
              {
                extras.map((extra) => 
                  <OrderExtra key={extra.Extra_id} id={extra._id} name={extra.item} price={extra.price} itemId={props.id} handleUpdateExtras={handleUpdateExtras} modalOpened={props.modalOpened}/>
                )
              }
            </section>
            <section className="px-2 pt-2">
              <p className="text-warning fw-bold text-end">Total: {currencyFormat(cost)}</p>
            </section>
          </div>
          <div className="modal-footer border-top border-warning border-2">
            <button type="button" className="btn btn-danger me-2" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={() => dispatch(updateItemExtras({id: props.id, extra: storedExtras}))}>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderOptions;