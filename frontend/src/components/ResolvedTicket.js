import React from "react";

const ResolvedTicket = ({ticket}) => {
    return (
         
         <div class="col">
            <div class="card h-100 w-100">
                <div class="card-body">
                    <h5 class="card-title">{ticket.ticket_title}</h5>
                    <div>
                        <p class="card-text">Date: {ticket.createdAt}</p>
                        <p class="card-text">Resolved Date: {ticket.updatedAt}</p>
                        
                    </div>
                    <p class=""> {ticket.ticket_body}</p>
                    <p class="fw-bold"> placeholder resolved text {ticket.resolution_body}</p>
                </div>
            </div>
        </div>
    );
};
export default ResolvedTicket;