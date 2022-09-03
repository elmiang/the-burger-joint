const OrderExtra = (props) => {
  return (
    <div className="form-check py-2">
      <input className="form-check-input col-1" type="checkbox" value=""/>
      <div className="row">
        <label className="form-check-label col ms-1 text-white">
          {props.name}
        </label>
        <label className="form-check-label col text-end me-2 text-warning">
          {props.price}
        </label>
      </div>
    </div>  
  )
}

export default OrderExtra;