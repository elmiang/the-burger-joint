import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


const Callback = () => {
    const { isAuthenticated, error} = useAuth0();
    const navigate = useNavigate();
    // Check that there is no errors within the callback
    if (error) {
        return ( 
            <div> {error.message} </div>
        );
    }

    // Navigate back to the root
    return navigate("/");
}

export default Callback