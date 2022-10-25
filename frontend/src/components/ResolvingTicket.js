import React from "react";
import { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react";

const baseurl = process.env.REACT_APP_BACKEND_API_URL;   
// Recieves tickets parameter for resolving
const ActiveTicket = ({ ticket }) => {
    const [ticket_resolved, setTicketResolved] = useState(Boolean)
    const [resolution_body, setResolutionBody] = useState('')
    const [error, setError] = useState(null)
    const { user, getAccessTokenSilently } = useAuth0();

    const baseurl = process.env.REACT_APP_BACKEND_API_URL; 

    const handleClick = async () => {
        // Object to contain set values of ticket
        const tickets = {
            ticket_resolved: true,
            resolution_body: resolution_body
          };
        // Updates ticket with resolved status & resolution body
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${baseurl}/api/tickets/` + ticket._id, {
            method: 'PATCH',
            body: JSON.stringify(tickets),
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
        })


        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            // Reset values on successful completion
            setResolutionBody('')
            setTicketResolved('')
            setError(null)
        }
    }
    

    return (
         <div className="col">
            <div className="card h-100 w-100">
                <div className="card-body">
                    <h5 className="card-title">{ticket.ticket_title}</h5>
                    <p className="card-text">Date: {ticket.createdAt}</p>
                    <p className="fw-bold">{ticket.ticket_body}</p>
                    <form>
                        <textarea rows = "10" cols="50" id="TicketBody" className="m-2"
                            onChange={(e) => setResolutionBody(e.target.value)}
                            value={resolution_body}
                        />
                        <div>
                            <button className="btn btn-primary rounded m-3" onClick={handleClick}>Resolve Ticket</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default ActiveTicket;


/**/