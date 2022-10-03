import '../../index.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import currencyFormat from '../../utility/Functions';

import OrderOptions from './OrderOptions';
import { deleteItem, updateItemQuantity } from '../../redux/cart';

const CartItem = (props) => {
  const cItems = useSelector((state) => state.cart); 
  const dispatch = useDispatch();

  const [price, setPrice] = useState(0);
  //Keeps track of the modal being opened (mimics an on open event)
  //Is used by the OrderIngredient and OrderExtra components
  const [modalOpened, setModalOpened] = useState(0);

  //Updates the item's quantity in the redux cart whenever the quantity is changed
  function handleQuantity (e) {
    dispatch(updateItemQuantity({id: props.id, num: e.target.value}));
  }

  //Deletes the item from the redux cart when the item is deleted from the cart
  function handleDelete () {
    dispatch(deleteItem(props.id));
  }

  //Updates modalOpened whenever the order options modal is opened
  function handleModalOpened(e) {
    setModalOpened(modalOpened + 1);
  }

  //Update the price for the current item (accounts for extras and quantity)
  function updatePrice() {
    const extras = cItems.find(item => item.id === props.id).extra;
    var extrasPrice = 0;
    if (extras !== undefined) {
      extras.forEach(extra => {
        extrasPrice += extra.price;
      });
    }
    setPrice(props.quantity * (props.price + extrasPrice));
  }

  //Update the price display whenever the quantity or item's extras are updated
  const currentItemExtras = cItems.find(item => item.id === props.id).extra;
  useEffect(() => {
    updatePrice();
  }, [props.quantity, currentItemExtras])

  return (
    <div className="container-fluid">
      <div className="cartItem m-2 p-4 border-bottom border-white">
        {/* Item name, price, quantity (dropdown), remove item (button) */}
        <div className="row justify-content-start align-items-start">
          <p className="col-2 text-white fw-bold me-3">{props.item}</p>
          <select className="col-2 col-xxl-1" name="quantity" value={props.quantity} onChange={handleQuantity}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <p className="col text-warning fw-bold text-end">{currencyFormat(price)}</p>
        </div>
        <button className="btn btn-sm btn-outline-danger" onClick={handleDelete}>Delete</button>
        <button className="bg-secondary ms-3" style={{ width: "2rem", height: "2rem"}} data-bs-toggle="modal" data-bs-target={`#orderOptions-${props.id}`} onClick={handleModalOpened}>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
          >
                <path d="M422.741,42.667h-60.07V32.491C362.671,14.543,348.128,0,330.18,0H181.828c-17.947,0-32.491,14.543-32.491,32.491v10.176
				H89.259c-25.734,0-46.592,20.858-46.592,46.592v376.149c0,25.734,20.858,46.592,46.592,46.592h333.483
				c25.734,0,46.592-20.858,46.592-46.592V89.259C469.333,63.525,448.475,42.667,422.741,42.667z M192.004,42.667H320v42.667
				H192.004V42.667z M426.667,465.408c0,2.17-1.755,3.925-3.925,3.925H89.259c-2.17,0-3.925-1.755-3.925-3.925V89.259
				c0-2.17,1.755-3.925,3.925-3.925h60.075v10.176c0,17.947,14.543,32.491,32.491,32.491h0.004h148.348h0.004
				c17.947,0,32.491-14.543,32.491-32.491V85.333h60.07c2.17,0,3.925,1.755,3.925,3.925V465.408z" />
          </svg>
          </button>
          <OrderOptions price={props.price} name={props.item} id={props.id} extra={props.extra} modalOpened={modalOpened}/>
      </div>
    </div>
  )
}

export default CartItem;