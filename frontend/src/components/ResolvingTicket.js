import React from "react";
import { useState } from "react"

const ActiveTicket = ({ ticket }) => {
    const [ticket_resolved, setTicketResolved] = useState(Boolean)
    const [resolution_body, setResolutionBody] = useState('')
    const [error, setError] = useState(null)

    const handleClick = async () => {
        //const tickets = {resolution_body}
        const tickets = {
            ticket_resolved: true,
            resolution_body: resolution_body
          };

        const response = await fetch('/api/tickets/' + ticket._id, {
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