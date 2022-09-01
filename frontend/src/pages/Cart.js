import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";

//Cart page
const Cart = () => {
  return (
    <div className="cart bg-secondary">
      <Navbar/>
      <div className="container-fluid p-3">
        {/* Shop title  */}
        {/* <h1 className="display-2 pb-3 mb-5 text-center text-warning fw-bold border-5 border-bottom border-warning">The Burger Joint</h1> */}
        <div className="row">
          {/* Navigation bar */}
          {/* Cart icon (could go in navbar?)  */}
          <div className="col-8">
          <h2 className="display-6 text-warning fw-bold border-3 border-bottom border-warning">Cart</h2>
            {/* Cart Items */}
            <CartItem item={"beef burger"} price={"$9.99"}/>
            <CartItem item={"cheeseburger"} price={"$12.99"}/>
            <CartItem item={"chicken burger"} price={"$7.99"}/>
          </div>
          <div className="col-4">
            <form className="form-group">
              {/* Coupon */}
              <div className="form-row">
                <div className="col-9">
                  <input className="form-control me-2" type="text" name="coupon" placeholder="Coupon"/>
                </div>
                <div className="col">
                  <button className="btn btn-sm btn-success">Submit</button>
                </div>
              </div>
            </form>
            {/* Checkout */}
            <p className="fw-bold text-warning">Total: $30.00</p>
            <button className="btn btn-warning">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Cart;