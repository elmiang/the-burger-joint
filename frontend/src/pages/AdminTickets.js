import React from "react";
import { useEffect, useState } from 'react'
import ResolvingTicket from '../components/ResolvingTicket'

// Bring in Auth0
import { useAuth0 } from "@auth0/auth0-react";

const baseurl = process.env.REACT_APP_BACKEND_API_URL;  

const Tickets = () => {
    
    const { user, getAccessTokenSilently } = useAuth0();  

    const [tickets, setTickets] = useState(null)    
    // Fetches tickets that have been marked as unresolved
    useEffect(() => {
        const fetchTickets = async () => {
            
            const accessToken = await getAccessTokenSilently();

            const response = await fetch(`${baseurl}/api/tickets/unresolved`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json"            
                },                    
            })
            const json = await response.json() 

            if (response.ok) {
                setTickets(json)
            }
        }

        fetchTickets()
    }, [])

    return ( 
        <div className="container-fluid bg-secondary w-75 mt-3 p-3 border border-dark bg-dark rounded">
            <div className="row">
                {/*AdminTicket: Active Tickets*/}
                <h3 id="ResolvingTicket" className="p-2 mt-3 text-white">Tickets to be resolved</h3>
                    <div className="row row-cols-1 row-cols-md-2 g-4 bg-light m-2 p-2 rounded">
                        {tickets && tickets.map((ticket) => (
                            <ResolvingTicket key={ticket._id} ticket={ticket}/>
                        ))}
                    </div>
            </div>
        </div>
    );
};
export default Tickets;