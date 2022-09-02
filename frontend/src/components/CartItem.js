import '../index.css'

const CartItem = (props) => {
  return (
    <div className="container-fluid">
      <div className="cartItem m-2 p-4 border-bottom border-white">
        {/* Item name, price, quantity (dropdown?), remove item (button) */}
        <div className="row justify-content-start align-items-start">
          <p className="col-2 text-white fw-bold me-3">{props.item}</p>
          <select className="col-2 col-xxl-1" name="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <p className="col text-warning fw-bold text-end">{props.price}</p>
        </div>
        <button className="btn btn-sm btn-outline-danger">Delete</button>
      </div>
    </div>
  )
}

export default CartItem;