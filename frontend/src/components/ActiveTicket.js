import React from "react";

const ActiveTicket = () => {
    return (
         
         <div class="col">
            <div class="card h-100 w-100">
                <div class="card-body">
                    <h5 class="card-title">Ticket Subject</h5>
                    <p class="card-text">Date: 27/05/2022</p>
                    <p class="fw-bold">Sample text Sample Text Sample Text Sample text</p>
                    <div>
                        <button className="btn btn-outline-danger rounded m-3">Cancel Ticket</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ActiveTicket;