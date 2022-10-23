import React from "react";
import { useState } from "react"

const ActiveTicket = ({ ticket }) => {
    const [ticket_resolved, setTicketResolved] = useState(Boolean)
    const [resolution_body, setResolutionBody] = useState('')
    const [error, setError] = useState(null)

    const baseurl = process.env.REACT_APP_BACKEND_API_URL; 

    const handleClick = async () => {
        //const tickets = {resolution_body}
        const tickets = {
            ticket_resolved: true,
            resolution_body: resolution_body
          };

        const response = await fetch(`${baseurl}/api/tickets/` + ticket._id, {
            method: 'PATCH',
            body: JSON.stringify(tickets),
            headers: {
                "Content-Type": "application/json"
              },
        })


        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setResolutionBody('')
            setTicketResolved('')
            setError(null)
            console.log('ticket edited', json)
        }
    }
    

    return (
         <div class="col">
            <div class="card h-100 w-100">
                <div class="card-body">
                    <h5 class="card-title">{ticket.ticket_title}</h5>
                    <p class="card-text">Date: {ticket.createdAt}</p>
                    <p class="fw-bold">{ticket.ticket_body}</p>
                    <form>
                        <textarea rows = "10" cols="50" id="TicketBody" class="m-2"
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