import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const baseurl = process.env.REACT_APP_BACKEND_API_URL;   

const ActiveTicket = ({ ticket }) => {
    const { user, getAccessTokenSilently } = useAuth0();

    const handleClick = async () => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${baseurl}/api/tickets/` + ticket._id, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
        })
        const json = await response.json()

        if (response.ok) {
            
        }
    }


    return (
         <div className="col">
            <div className="card h-100 w-100">
                <div className="card-body">
                    <h5 className="card-title">{ticket.ticket_title}</h5>
                    <p className="card-text">Date: {ticket.createdAt}</p>
                    <p className="fw-bold">{ticket.ticket_body}</p>
                    <div>
                        <button className="btn btn-outline-danger rounded m-3" onClick={handleClick}>Cancel Ticket</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ActiveTicket;


/**/