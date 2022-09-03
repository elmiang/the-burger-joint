const Navbar = () => {
    return(
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Navbar brand */}
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
                <a className="nav-link" href="">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Sign Up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Cart</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar;