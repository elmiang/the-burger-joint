const CartItem = () => {
  return (
      <div className="cartItem m-1 p-3 border-bottom border-warning">
        {/* Item name, price, quantity (dropdown?), remove item (button) */}
        <div className="row">
          <p className="col">Burger</p>
          <p className="col text-end">$9.99</p>
        </div>
        <select className="form-select-sm" name="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button className="btn btn-sm btn-outline-danger ms-5">Delete</button>
      </div>
  )
}

export default CartItem;