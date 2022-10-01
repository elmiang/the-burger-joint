import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

const OrderIngredient = (props) => {
  const cartItems = useSelector((state) => state.cart);
  const [isChecked, setIsChecked] = useState(false);

  function updateCheckedStatus() {
    const ingredients = cartItems.find(item => item.id === props.itemId).ingredients;
    if (ingredients !== undefined) {
      if (ingredients.includes(props.name)) {
        setIsChecked(true);
      }
    }
  }

  function handleUpdateIngredients(e) {
    setIsChecked(!isChecked);
    props.handleUpdateIngredients(e);
  }

  //Update checked status based on if the extra ingredient is in the cart
  //Also run update whenever the modal is opened
  useEffect(() => {
    updateCheckedStatus();
  }, [cartItems.find(item => item.id === props.itemId).ingredients, props.modalOpened]); 

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