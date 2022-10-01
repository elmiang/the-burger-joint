import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import currencyFormat from "../utility/Functions";

const OrderExtra = (props) => {
  const cartItems = useSelector((state) => state.cart);
  const [isChecked, setIsChecked] = useState(false);

  function updateCheckedStatus() {
    const extras = cartItems.find(item => item.id === props.itemId).extra;
    if (extras !== undefined) {
      if (extras.find(extra => extra._id === props.id)) {
        setIsChecked(true);
      }
    }
  }

  function handleUpdateExtras(e) {
    setIsChecked(!isChecked);
    props.handleUpdateExtras(e);
  }

  //Update checked status based on if the extra ingredient is in the cart
  //Also run update whenever the modal is opened
  useEffect(() => {
    updateCheckedStatus();
  }, [cartItems.find(item => item.id === props.itemId).extra, props.modalOpened]); 

  return (
    <div className="form-check py-2">
      <input className="form-check-input col-1" type="checkbox" checked={isChecked} value={props.id} onChange={handleUpdateExtras}/>
      <div className="row">
        <label className="form-check-label col ms-1 text-white">
          {props.name}
        </label>
        <label className="form-check-label col text-end me-2 text-warning">
          {currencyFormat(props.price)}
        </label>
      </div>
    </div>  
  )
}

export default OrderExtra;