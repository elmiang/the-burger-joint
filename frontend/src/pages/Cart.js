import CartItem from "../components/CartItem";
import OrderOptions from "../components/OrderOptions";

//Cart page
const Cart = () => {
  return (
    <div className="cart bg-secondary">
      <div className="container-fluid bg-secondary w-50 mt-3 p-3 border border-dark">
        <h2 className="display-6 text-warning pb-3 fw-bold border-3 border-bottom border-warning">Cart</h2>
          {/* Cart Sample Items */}
          <CartItem item={"Beef Burger"} price={"$9.99"}/>
          <CartItem item={"Cheese Burger"} price={"$12.99"}/>
          <CartItem item={"Chicken Burger"} price={"$7.99"}/>
          <CartItem item={"Mixed Burger"} price={"$10.99"}/>
          <div className="row">
            {/* Checkout */}
            <div className="col d-block ms-3 mt-3">
              {/* Order Options Test */}
              <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#orderOptions">
                Order Options
              </button>
              <OrderOptions />
              <p className="fw-bold text-warning mt-3">Total: $41.96</p>
              <button className="btn btn-warning">Checkout</button>
            </div>
            <form className="col form-group">
              {/* Coupon */}
              <div className="form-row my-3 ms-5">
                <input className="form-control-sm me-2" type="text" name="coupon" placeholder="Coupon"/>
                <button className="btn btn-sm btn-success">Submit</button>
              </div>
            </form>
          </div>
      </div>
    </div>
  ) 
}

export default Cart;