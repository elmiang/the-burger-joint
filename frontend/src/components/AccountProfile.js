import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavDropdown } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

import { ProfileDetails} from '../pages/ProfileDetails'

const AccountProfile = () => {
    const { user, logout, isAuthenticated, loginWithRedirect} = useAuth0();
    if (!isAuthenticated) {
        return (
            <a className="account-icon" href="/" onClick={() => loginWithRedirect()} alt="Sign in or Sign up">
                <IconContext.Provider value={{ color: "gray", size: "32px" }}>
                    <FaUserCircle />
                </IconContext.Provider>
            </a>
        )
    }
    if (isAuthenticated) {

        const navDropdownTitle = (
            <span className="">
                <IconContext.Provider value={{ color: "gray", size: "32px", className: "me-1" }}>
                    <FaUserCircle />
                </IconContext.Provider>
                {user.name}
            </span>
        );

        return (
            <NavDropdown id="account-navbar-dropdown" className="" title={navDropdownTitle}>
                <NavDropdown.Item href="/profile"> Profile</NavDropdown.Item>
                <NavDropdown.Item  href="/orderhistory"> View Order History</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item  onClick={() => logout()}>Logout</NavDropdown.Item>
           </NavDropdown>                     
        )
    }    
}

export default AccountProfile;