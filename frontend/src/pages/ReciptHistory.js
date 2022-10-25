//import { set } from "mongoose";
import React, { useSyncExternalStore } from 'react'
import { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import ReciptDetails from '../components/ReciptDetails';

// Bring in Auth0
const baseurl = process.env.REACT_APP_BACKEND_API_URL;    

const OrderHistory = () => {
    const [recipts, setRecipts] = useState(null)
    const { user, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const fetchRecipts = async () => {
            const accessToken = await getAccessTokenSilently();
            const response = await fetch(`${baseurl}/api/recipts/` + user.email, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json"            
                },                   
            });
            const json = await response.json() 

            if (response.ok) {
                setRecipts(json)
            }
        }

        fetchRecipts()
    }, [])
    
    return ( 
        <div className="container-fluid bg-secondary w-75 mt-3 p-3 border border-dark bg-dark rounded">
                <div className="col py-5 p-5 rounded-2" tabindex="0">
                <h3 id="reciptHeading" className="p-1 text-white text-center">Order History</h3>
                <div className="recipts text-center d-flex flex-column align-items-center">
                    {recipts && recipts.map((recipt) => (
                        <ReciptDetails key={recipt._id} recipt={recipt}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default OrderHistory;