const OrderIngredient = (props) => {
  return (
    <div className="form-check py-2">
      <input className="form-check-input" type="checkbox" value="" defaultChecked/>
        <label className="form-check-label ms-1 text-white">
          {props.name}
        </label>
    </div>  
  )
}

export default OrderIngredient;