import React from "react";
// Recieves ticket parameter with status resolved
const ResolvedTicket = ({ticket}) => {
    return (
         
         <div className="col">
            <div className="card h-100 w-100">
                <div className="card-body">
                    <h5 className="card-title">{ticket.ticket_title}</h5>
                    <div>
                        <p className="card-text">Date: {ticket.createdAt}</p>
                        <p className="card-text">Resolved Date: {ticket.updatedAt}</p>
                        
                    </div>
                    <p className="border border-secondary rounded bg-light  p-2 text-muted"> {ticket.ticket_body}</p>
                    <p><strong>Solution:</strong></p>
                    <p className="text">{ticket.resolution_body}</p>
                </div>
            </div>
        </div>
    );
};
export default ResolvedTicket;