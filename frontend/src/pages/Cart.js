import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";
import OrderOptions from "../components/OrderOptions";
import currencyFormat from '../utility/Functions';

//Cart page
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "beef burger",
      quantity: 1,
      price: 15
    },
    {
      id: 2,
      name: "chicken burger",
      quantity: 1,
      price: 14
    },
    {
      id: 3,
      name: "cheese burger",
      quantity: 1,
      price: 12.99
    },
    {
      id: 4,
      name: "veggie burger",
      quantity: 1,
      price: 13.99
    }
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  function updateTotalPrice() {
    let initial = 0;
    let total = cartItems.reduce(
      (prev, curr) => { return prev + (curr.price * curr.quantity) }, initial
    );
    setTotalPrice(currencyFormat(total));
  }

  function updateItemQuantity(id, num) {
    var items = [...cartItems]
    items.find(item => item.id === id).quantity = num;
    setCartItems(items);
  }

  function deleteItem(id) {
    const items = cartItems.filter(item => item.id !== id);
    setCartItems(items);
  }

  useEffect(() => {
    updateTotalPrice();
  }, [cartItems.map(item => item.quantity)]);

  // useEffect(() => {
  //   setCartItems(cartItems);
  // }, [cartItems]);

  return (
    <div className="cart bg-secondary">
      <div className="container-fluid bg-secondary w-50 mt-3 p-3 border border-dark">
        <h2 className="display-6 text-warning pb-3 fw-bold border-3 border-bottom border-warning">Cart</h2>
          {
            cartItems.map((item) => 
              <CartItem item={item.name} price={item.price} quantity={item.quantity} id={item.id} 
              updateItemQuantity={updateItemQuantity} deleteItem={deleteItem}/>
            )
          }
          <div className="row">
            {/* Checkout */}
            <div className="col d-block ms-3 mt-3">
              {/* Order Options Test */}
              <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#orderOptions">
                Order Options
              </button>
              <OrderOptions />
              <p className="fw-bold text-warning mt-3">{totalPrice}</p>
              <Link className="btn btn-warning" to="/checkout">Checkout</Link>
            </div>
            <form className="col form-group">
              {/* Coupon */}
              <div className="form-row my-3 ms-5">
                <input className="form-control-sm me-2" type="text" name="coupon" placeholder="Coupon"/>
                <button className="btn btn-sm btn-success">Submit</button>
              </div>
            </form>
          </div>
      </div>
    </div>
  ) 
}

export default Cart;