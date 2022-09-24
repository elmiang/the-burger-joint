import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";

import OrderOptions from "../components/OrderOptions";
import currencyFormat from '../utility/Functions';

//Cart page
const Cart = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")));

  const [coupons, setCoupons] = useState([
    {
      id: 1,
      code: '15off',
      rate: 0.15,
      isValid: true
    }
  ]);

  const [couponResponse, setCouponResponse] = useState("");

  const [inputCode, setInputCode] = useState();

  const [totalPrice, setTotalPrice] = useState(0);

  function updateTotalPrice() {
    let initial = 0;
    let total = cartItems.reduce(
      (prev, curr) => { return prev + (curr.price * curr.quantity) }, initial
    );
    setTotalPrice(currencyFormat(total));
  }

  function updateItemPrice(id, num) {
    var items = [...cartItems];
    items.find(item => item.id === id).price = num;
    setCartItems(items);
  }

  function handleCouponPrice(coupon) {
    var items = [...cartItems];
    items.forEach((item) => {
      item.price = item.price * (1 - coupon.rate);
    })
    setCartItems(items);
  }

  function handleAddDummyItem(name, price) {
    var items = [...cartItems];

    const findItem = items.find(item => item.name === name);
    if (findItem === undefined) {
      items.push({
        id: items.length + 1,
        name: name,
        quantity: 1,
        price: price
      });
    }
    else {
      findItem.quantity += 1;
    }
    setCartItems(items);
    console.log(items);
  }

  function updateItemQuantity(id, num) {
    var items = [...cartItems];
    items.find(item => item.id === id).quantity = num;
    setCartItems(items);
  }

  function deleteItem(id) {
    const items = cartItems.filter(item => item.id !== id);
    setCartItems(items);
  }

  function handleCouponCode(e) {
    setInputCode(e.target.value);
  }

  function handleCouponSubmit() {
    let coupon = coupons.find(coupon => coupon.code === inputCode);
    if (coupon != null && coupon.isValid) {
      handleCouponPrice(coupon);
      coupon.isValid = false;
      setCouponResponse('valid');
    }
    else {
      setCouponResponse('invalid');
    }
  }

  //Update cartItems in local storage when cart items is updated
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log("Local storage updated");
  }, [cartItems, cartItems.map(item => item.quantity), cartItems.map(item => item.price)]);

  //Update the total price when an item quantity is updated
  useEffect(() => {
    updateTotalPrice();
  }, [cartItems.map(item => item.quantity)]);

  return (
    <div className="cart bg-secondary">
      <div className="container-fluid bg-secondary w-50 mt-3 p-3 border border-dark">
        <h2 className="display-6 text-warning pb-3 fw-bold border-3 border-bottom border-warning">Cart</h2>
        {/* Test Cart Persistence */}
        <button onClick={() => handleAddDummyItem("Chicken Burger", 14)}>Add Chicken Burger</button>
        <button onClick={() => handleAddDummyItem("Beef Burger", 15)}>Add Beef Burger</button>
        <button onClick={() => handleAddDummyItem("Cheese Burger", 12.99)}>Add Cheese Burger</button>
        <button onClick={() => handleAddDummyItem("Veggie Burger", 13.99)}>Add Veggie Burger</button>
          {
            cartItems.map((item) => 
              <CartItem key={item.name} item={item.name} price={item.price} quantity={item.quantity} id={item.id} 
              updateItemQuantity={updateItemQuantity} deleteItem={deleteItem} updateItemPrice={updateItemPrice}/>
            )
          }
          <div className="row">
            {/* Checkout */}
            <div className="col d-block ms-3 mt-3">
              <p className="fw-bold text-warning mt-3">{totalPrice}</p>
              <Link className="btn btn-warning" to="/checkout">Checkout</Link>
            </div>
            <form className="col form-group">
              {/* Coupon */}
              <div className="form-row my-3 ms-5">
                <input className="form-control-sm me-2" type="text" name="coupon" onChange={handleCouponCode} value={inputCode} placeholder="Coupon"/>
                <button className="btn btn-sm btn-success" type="button" onClick={handleCouponSubmit}>Submit</button>
                <div className='pt-3'>
                  {couponResponse==='valid' && <p className='text-primary fw-bold'>Coupon successfully applied</p>}
                  {couponResponse==='invalid' && <p className='text-danger fw-bold'>Coupon invalid</p>}
                </div>
              </div>
            </form>
          </div>
      </div>
    </div>
  ) 
}

export default Cart;