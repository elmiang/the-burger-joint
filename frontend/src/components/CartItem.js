import '../index.css'
import React, { useEffect, useState } from 'react'
import currencyFormat from '../utility/Functions';

import OrderOptions from './OrderOptions';

const CartItem = (props) => {

  // const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  function handleQuantity (e) {
    props.updateItemQuantity(props.id, e.target.value);
  }

  function handleDelete () {
    props.deleteItem(props.id);
  }

  function updatePrice() {
    setPrice(props.quantity * props.price);
  }

  useEffect(() => {
    updatePrice();
  }, [props.quantity, props.price])

  return (
    <div className="container-fluid">
      <div className="cartItem m-2 p-4 border-bottom border-white">
        {/* Item name, price, quantity (dropdown?), remove item (button) */}
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
        <button className="bg-secondary ms-3" style={{ width: "2rem", height: "2rem"}} data-bs-toggle="modal" data-bs-target={`#orderOptions-${props.id}`}>
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
          <OrderOptions price={props.price} name={props.item} id={props.id} updatePrice={props.updateItemPrice}/>
      </div>
    </div>
  )
}

export default CartItem;