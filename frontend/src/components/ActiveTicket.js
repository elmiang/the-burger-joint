import React from "react";
const ActiveTicket = ({ ticket }) => {

    const handleClick = async () => {
        const response = await fetch('/api/tickets/' + ticket._id, {
            method: 'DELETE'
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