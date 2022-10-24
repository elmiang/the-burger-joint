import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";

import CartItem from "../components/Cart/CartItem";

import { currencyFormat, encryptData, decryptData, handleCategoryPrice } from '../utility/Functions';
import axios from 'axios';

const baseurl = process.env.REACT_APP_BACKEND_API_URL;
const salt = process.env.REACT_APP_SALT;

//Cart page
const Cart = () => {
  const { user } = useAuth0();
  const cartItems = useSelector((state) => state.cart);
  const couponSubmitted = useRef(false);

  //Coupon-related states
  const [coupons, setCoupons] = useState([]);
  const [usedCoupons, setUsedCoupons] = useState([]);
  const [couponResponse, setCouponResponse] = useState("");
  const [discountMessage, setDiscountMessage] = useState("");
  const [inputCode, setInputCode] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch user's used coupons
  const fetchUsedCoupons = async () => {
    if (user) {
      try {
        const response = await axios.get(`${baseurl}/api/profile/${user.email}`);
        if (response.data.coupons) {
          setUsedCoupons(response.data.coupons);
        }
        else {
          setUsedCoupons([]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  //Updates the total price of the cart
  //Accounts for cart item extras and coupon application
  function updateTotalPrice(coupon) {
    let initial = 0;
    
    let total = cartItems.reduce(
      (prev, curr) => {
        var extrasPrice = 0;

        if (curr.servingSize) {
          if (curr.servingSize === 'large') {
            extrasPrice += handleCategoryPrice(curr);
          }
        }
        // Update a seperate variables that includes the pricing of extras for each cart item to the calculation
        if (curr.extra) {
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

  //Handles user entry into the coupon input field
  function handleCouponCode(e) {
    setInputCode(e.target.value);
  }

  //Handles the coupon submission
  //Checks if the coupon exists and is valid, then applies the coupon
  function handleCouponSubmit() {
    couponSubmitted.current = true;
    fetchUsedCoupons();
  }

  //Update the total price when an item quantity, extra or serving size is updated
  const cartQuantities = cartItems.map(item => item.quantity);
  const cartExtras = cartItems.map(item => item.extra)
  const cartItemServing = cartItems.map(item => item.servingSize);
  useEffect(() => {
    const coupon = localStorage.getItem("coupon");
    if (coupon) {
      var decryptedCoupon = decryptData(coupon, salt);
      //If coupon is modified
      if (!decryptedCoupon) {
        decryptedCoupon = [];
      }
    }

    updateTotalPrice(decryptedCoupon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartQuantities, cartExtras, cartItemServing]);

  //Update coupon message (message under total price) whenever the total price is updated
  useEffect(() => {
    const coupon = localStorage.getItem("coupon");
    if (coupon) {
      var decryptedCoupon = decryptData(coupon, salt);
    }

    if (decryptedCoupon && totalPrice) {
      setDiscountMessage(decryptedCoupon.rate * 100 + "% discount applied to $" + ((1 / (1-decryptedCoupon.rate)) * totalPrice.replace(/[^\d.]/g, '')));
    }

  }, [totalPrice])
  
  //Fetch coupons from database and save to coupons state on load
  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const response = await axios.get(`${baseurl}/api/coupon/`);
        setCoupons(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCoupons();
  }, [])

  //Set the coupon states and responses
  //Runs whenever the usedCoupons field changes
  useEffect(() => {
    if (!couponSubmitted.current) {
      return;
    }

    if (usedCoupons) {
      if (usedCoupons.find(coupon => coupon.code === inputCode)) {
        setCouponResponse('couponApplied');
        return;
      }
    }

    let coupon = coupons.find(coupon => coupon.code === inputCode);
    if (coupon) {
      const encryptedData = encryptData(coupon, salt);

      setCouponResponse('valid');
      localStorage.setItem('coupon', encryptedData);
    }
    else {
      setCouponResponse('invalid');
    }
  }, [usedCoupons])

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
                  {couponResponse==='couponApplied' && <p className='text-danger fw-bold'>The coupon has already been applied</p>}
                </div>
              </div>
            </form>
          </div>
      </div>
    </div>
  ) 
}

export default Cart;