const CartItem = () => {
  return (
    <div className="container-fluid">
      <div className="cartItem m-2 p-4 border-bottom border-warning">
        {/* Item name, price, quantity (dropdown?), remove item (button) */}
        <div className="row justify-content-start align-items-start">
          <p className="col-2 text-warning fw-bold me-3">Burger</p>
          <select className="col-2" name="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <p className="col text-warning fw-bold text-end">$9.99</p>
        </div>
        <button className="btn btn-sm btn-outline-danger">Delete</button>
      </div>
    </div>
  )
}

export default CartItem;