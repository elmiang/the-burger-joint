import React from "react";

const Header = () => {
    return ( 
        <nav class="navbar bg-light fixed-top">
            <div class="container-fluid">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <a class="navbar-brand" href="./">
                    Restaurant Ordering System
                            <button class="btn" type="button">Log In</button>
                            <button class="btn" type="button">Sign Up</button>
                            <button class="btn" type="button">Cart</button>
                    </a>
                </ul>
            </div>
        </nav>
    );
};
export default Header;