import AccountProfile from './AccountProfile';

import { createPath, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import OrderHistory from "../pages/ReciptHistory";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);

  return(
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid justify-content-end">
        <a href="/menu" className="navbar-brand me-auto">
          <span className="fw-bold text-warning">
            The Burger Joint
          </span>
        </a>
        {/* Account Profile */}
        <AccountProfile/>

        {/* Cart  */}
        <a href="/cart" className="btn bg-dark rounded-circle me-2" style={{ width: "3.5rem", height: "3rem"}}>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="grey"
          >
                <path d="M14 13.1V12H4.6l.6-1.1 9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5 5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4.9L4 5z" />
          </svg>
          <div className='rounded-circle bg-primary d-flex justify-content-center align-items-center' 
          style={{ color: 'white', fontSize: '13px', width: "1.25rem", height: "1.25rem", transform: "translate(100%, -20%)"}}>
            {cartItems.length}
          </div>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navigation items */}
        <div className='collapse navbar-collapse navbar-dark' id="main-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">Checkout</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Product Management</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/sales">Sales Management</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Tickets</a> */}
              <Link className="nav-link" to="/recipthistory">Recipts</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Tickets</a> */}
              <Link className="nav-link" to="/tickets">Tickets</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Tickets</a> */}
              <Link className="nav-link" to="/admintickets">Ticket Management</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;