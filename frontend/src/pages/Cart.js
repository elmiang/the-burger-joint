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
    },
    {
      id: 2,
      code: '50off',
      rate: 0.5,
      isValid: true
    },
    {
      id: 3,
      code: '25off',
      rate: 0.25,
      isValid: true
    },
    {
      id: 4,
      code: 'nocoupon',
      rate: 0,
      isValid: true
    }
  ]);

  //Coupon-related states
  const [couponResponse, setCouponResponse] = useState("");

  const [discountMessage, setDiscountMessage] = useState("");

  const [inputCode, setInputCode] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);

  function updateTotalPrice(coupon) {
    let initial = 0;
    
    let total = cartItems.reduce(
      (prev, curr) => {
        var extrasPrice = 0;
        // Add pricing of extras to the calculation
        if (curr.extra !== undefined) {
          curr.extra.forEach(extra => extrasPrice += extra.price); 
        }
        // Handle application of coupon on total price
        if (coupon) {
          return prev + (((curr.price + extrasPrice) * (1 - coupon.rate)) * curr.quantity);
        }
        return prev + ((curr.price + extrasPrice) * curr.quantity);
      }, initial
    );
    setTotalPrice(currencyFormat(total));
  }

  function handleCouponCode(e) {
    setInputCode(e.target.value);
  }

  function handleCouponSubmit() {
    let coupon = coupons.find(coupon => coupon.code === inputCode);
    const couponStatus = localStorage.getItem('couponUsed');

    if (!couponStatus) {
      if (coupon && coupon.isValid) {
        coupon.isValid = false;
        setCouponResponse('valid');
        localStorage.setItem('coupon', JSON.stringify(coupon));
        localStorage.setItem('couponUsed', true);
      }
      else {
        setCouponResponse('invalid');
      }
    }
    else {
      setCouponResponse('couponApplied');
    }
  }

  //Update the total price when an item quantity or extra is updated
  useEffect(() => {
    const coupon = JSON.parse(localStorage.getItem('coupon'));

    updateTotalPrice(coupon);
  }, [cartItems.map(item => item.quantity), cartItems.map(item => item.extra)]);


  useEffect(() => {
    const couponStatus = localStorage.getItem('couponUsed');
    const coupon = JSON.parse(localStorage.getItem('coupon'));

    if (couponStatus && coupon && totalPrice) {
      setDiscountMessage("%" + coupon.rate * 100 + " discount applied to $" + ((1 / coupon.rate) * totalPrice.replace(/[^\d.]/g, '')));
    }

  }, [localStorage.getItem('couponUsed'), totalPrice])

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
              <p className="fw-bold text-warning mt-3" data-testid='checkoutPrice'>{totalPrice}</p>
              <span>
                <p className='text-warning font-italic'>{discountMessage}</p>
              </span>
              <Link className="btn btn-warning" to="/checkout">Checkout</Link>
            </div>
            <form className="col form-group">
              {/* Coupon */}
              <div className="form-row my-3 ms-5">
                <input className="form-control-sm me-2" type="text" name="coupon" onChange={handleCouponCode} value={inputCode} placeholder="Coupon"/>
                <button className="btn btn-sm btn-success" type="button" onClick={handleCouponSubmit}>Submit</button>
                <div className='pt-2'>
                  {couponResponse==='valid' && <p className='text-warning fw-bold'>Coupon successfully applied</p>}
                  {couponResponse==='invalid' && <p className='text-danger fw-bold'>Coupon invalid</p>}
                  {couponResponse==='couponApplied' && <p className='text-danger fw-bold'>A coupon is already applied</p>}
                </div>
              </div>
            </form>
          </div>
      </div>
    </div>
  ) 
}

export default Cart;