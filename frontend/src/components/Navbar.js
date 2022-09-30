import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom'
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

const Navbar = () => {
  return(
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Navbar brnpm,and */}
        <a href="" className="navbar-brand">
          <span className="fw-bold text-warning">
            The Burger Joint
          </span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation items */}
        <div className="collapse navbar-collapse justify-content-end align-center navbar-dark" id="main-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <LoginButton/>
              <LogoutButton/>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Menu</a> */}
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Cart</a> */}
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Checkout</a> */}
              <Link className="nav-link" to="/checkout">Checkout</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Products</a> */}
              <Link className="nav-link" to="/products">Product Management</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Tickets</a> */}
              <Link className="nav-link" to="/tickets">Tickets</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;