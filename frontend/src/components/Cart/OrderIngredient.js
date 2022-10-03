import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

const OrderIngredient = (props) => {
  const cartItems = useSelector((state) => state.cart);
  const [isChecked, setIsChecked] = useState(false);

  //Dynamically sets the checked status of the ingredient based on whether the ingredient is present within the current item
  function updateCheckedStatus() {
    const ingredients = cartItems.find(item => item.id === props.itemId).ingredients;
    if (ingredients !== undefined) {
      if (ingredients.includes(props.name)) {
        setIsChecked(true);
      }
    }
  }

  //Updates the checked status whenever the checkbox is interacted with
  function handleUpdateIngredients(e) {
    setIsChecked(!isChecked);
    props.handleUpdateIngredients(e);
  }

  //Updates the checked status whenever the ingredients property changes or the modal is opened
  const currentItemIngredients = cartItems.find(item => item.id === props.itemId).ingredients;
  useEffect(() => {
    updateCheckedStatus();
  }, [currentItemIngredients, props.modalOpened]); 

  return (
    <div className="form-check py-2">
      <input className="form-check-input" type="checkbox" value={props.name} checked={isChecked} onChange={handleUpdateIngredients}/>
        <label className="form-check-label ms-1 text-white">
          {props.name}
        </label>
    </div>  
  )
}

export default OrderIngredient;