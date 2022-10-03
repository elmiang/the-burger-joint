import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { currencyFormat } from "../../utility/Functions";

const OrderExtra = (props) => {
  const cartItems = useSelector((state) => state.cart);
  const [isChecked, setIsChecked] = useState(false);

  //Dynamically sets the checked status of the extra based on whether the extra is present within the current item
  function updateCheckedStatus() {
    const extras = cartItems.find(item => item.id === props.itemId).extra;
    if (extras !== undefined) {
      if (extras.find(extra => extra._id === props.id)) {
        setIsChecked(true);
      }
    }
  }

  //Updates the checked status whenever the checkbox is interacted with
  function handleUpdateExtras(e) {
    setIsChecked(!isChecked);
    props.handleUpdateExtras(e);
  }

  //Updates the checked status whenever the ingredients property changes or the modal is opened
  const currentItemExtras = cartItems.find(item => item.id === props.itemId).extra;
  useEffect(() => {
    updateCheckedStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentItemExtras, props.modalOpened]); 

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