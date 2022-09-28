import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import CartItem from "../components/CartItem";

import currencyFormat from '../utility/Functions';
import { setItems } from '../redux/cart';

//Cart page
const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
      (prev, curr) => {
        var extrasPrice = 0;
        if (curr.extra !== undefined) {
          curr.extra.forEach(extra => extrasPrice += extra.price); 
        }
        return prev + ((curr.price + extrasPrice) * curr.quantity) }, initial
    );
    setTotalPrice(currencyFormat(total));
  }

  function handleCouponPrice(coupon) {
    var items = [...cartItems];
    items.forEach((item) => {
      item.price = item.price * (1 - coupon.rate);
    })
    dispatch(setItems(items));
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

  // Update cartItems in local storage when cart items is updated
  // useEffect(() => {
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  //   console.log("Local storage updated");
  // }, [cartItems, cartItems.map(item => item.quantity), cartItems.map(item => item.price), cartItems.map(item => item.extra)]);

  //Update the total price when an item quantity or extra is updated
  useEffect(() => {
    updateTotalPrice();
  }, [cartItems.map(item => item.quantity), cartItems.map(item => item.extra)]);

  return (
    <div className="cart bg-secondary">
      <div className="container-fluid bg-secondary w-50 mt-3 p-3 border border-dark">
        <h2 className="display-6 text-warning pb-3 fw-bold border-3 border-bottom border-warning">Cart</h2>
          {
            cartItems.map((item) => 
              <CartItem key={item.name} item={item.name} price={item.price} quantity={item.quantity} id={item.id} 
              extra={item.extra}/>
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