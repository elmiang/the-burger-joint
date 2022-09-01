import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//Cart page
const Cart = () => {
  return (
    <div className="cart bg-secondary">
      <Navbar/>
      <div className="container-fluid bg-secondary w-50 mt-3 p-3 border border-dark">
        <h2 className="display-6 text-warning pb-3 fw-bold border-3 border-bottom border-warning">Cart</h2>
          {/* Cart Items */}
          <CartItem item={"beef burger"} price={"$9.99"}/>
          <CartItem item={"cheeseburger"} price={"$12.99"}/>
          <CartItem item={"chicken burger"} price={"$7.99"}/>
          <CartItem item={"mixed burger"} price={"$10.99"}/>
          <form className="form-group">
            {/* Coupon */}
            <div className="form-row m-3">
              <input className="form-control-sm me-2" type="text" name="coupon" placeholder="Coupon"/>
              <button className="btn btn-sm btn-success">Submit</button>
            </div>
          </form>
          {/* Checkout */}
          <div className="d-block ms-3">
            <p className="fw-bold text-warning">Total: $30.00</p>
            <button className="btn btn-warning">Checkout</button>
          </div>
      </div>
    </div>
  ) 
}

export default Cart;