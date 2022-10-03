import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import OrderExtra from "./OrderExtra";
import OrderIngredient from "./OrderIngredient";

import { currencyFormat, handleCategoryPrice } from "../../utility/Functions";
import { updateItemExtras, updateItemIngredients, updateServingSize } from '../../redux/cart';

const baseurl = process.env.REACT_APP_BACKEND_API_URL;      

const OrderOptions = (props) => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //extras/ingredients array to store all available options for the user
  //storedExtras/storedIngredients array for options that the user has selected

  const [extras, setExtras] = useState([]);
  const [storedExtras, setStoredExtras] = useState([]);
  const [servingSize, setServingSize] = useState("regular");

  const [ingredients, setIngredients] = useState([]);
  const [storedIngredients, setStoredIngredients] = useState([]);

  const [cost, setCost] = useState(props.price);

  //Updates the serving size based on the user's selection
  function handleServingSize(e) {
    setServingSize(e.target.value);
  }

  //Update the locally stored extras array based on options checked by the user
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

  //Update the locally stored ingredients array based on options checked by the user
  function handleUpdateIngredients(e) {
    var items = [...storedIngredients];
    if (e.target.checked && !storedIngredients.includes(e.target.value)) {
      items.push(ingredients.find(ingredient => ingredient === e.target.value));
    } 
    else {
      items = items.filter(item => item !== e.target.value);
    }
    setStoredIngredients(items);
  }

  //Update the redux cart extras and ingredients state with the locally stored extras and ingredients
  function handleAllUpdates() {
    dispatch(updateItemExtras({id: props.id, extra: storedExtras}));
    dispatch(updateItemIngredients({id: props.id, ingredients: storedIngredients}));
    dispatch(updateServingSize({id: props.id, servingSize: servingSize}));
  }

  //Set the local available extras and ingredients for every item in the cart
  useEffect(() => {
    const currentItem = cartItems.find(item => item.id === props.id);
    //Retrieve all extras from the database and save it to the extras state
    const fetchExtras = async () => {
      console.log(`calling backend: ${baseurl}`);
      const response = await axios.get(`${baseurl}/api/cart/`);
      
      if (response.status === 200) {
        if (currentItem.category === 'Burger') {
          setExtras(response.data);
        }
      }
    }

    //Retrieve all ingredients from the current item in the database and save it to the ingredients state
    const fetchIngredients = async () => {
      const response = await axios.get(`${baseurl}/api/menu/`);

      if (response.status === 200) {
        const ingredients = response.data.find(item => item.Dish_id === props.id).ingredients;
        if (ingredients) {
          setIngredients(ingredients);
        }
      }
    }

    fetchIngredients();
    fetchExtras();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Update local stored extras && ingredients to match those stored in cart
  //Fired whenever the order options menu is opened
  useEffect(() => {
    let extras = cartItems.find(item => item.id === props.id).extra;
    let ingredients = cartItems.find(item => item.id === props.id).ingredients;

    if (extras) {
      setStoredExtras(extras);
    }
    if (ingredients) {
      setStoredIngredients(ingredients);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.modalOpened])

  //Update the serving size to match item in cart items when the modal is opened
  useEffect(() => {
    const selectedSize = cartItems.find(item => item.id === props.id).servingSize;
    if (selectedSize) {
      setServingSize(selectedSize);
    }
  }, [props.modalOpened])

  // Update local cost based on extra ingredients selected in storedExtras
  useEffect(() => {
    var extras = [...storedExtras];
    var cost = props.price;

    if (servingSize === 'large') {
      cost += handleCategoryPrice(cartItems.find(item => item.id === props.id));
    }

    if (extras.length > 0) {
      extras.forEach((extra) => {
        cost += extra.price;
        setCost(cost);
      })
    }
    else {
      setCost(cost);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storedExtras, servingSize]);

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
              {
                ingredients.map((ingredient) => 
                  <OrderIngredient name={ingredient} itemId={props.id} handleUpdateIngredients={handleUpdateIngredients} modalOpened={props.modalOpened}/>
                )
              }
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
            <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={handleAllUpdates}>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderOptions;