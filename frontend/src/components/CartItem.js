import '../index.css'
import React, { useEffect, useState } from 'react'
import currencyFormat from '../utility/Functions';

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
  }, [props.quantity])

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
      </div>
    </div>
  )
}

export default CartItem;