import React from "react";
import ActiveTicket from "../components/ActiveTicket"
import ResolvedTicket from "../components/ResolvedTicket"
const Tickets = () => {
    return ( 
        <div class="container-fluid bg-secondary w-75 mt-3 p-3 border border-dark bg-dark rounded">
            <div class="row">
                {/*Ticket: Active Tickets*/}
                <h3 id="ActiveTicket" class="p-2 mt-3 text-white">Active Tickets</h3>
                    <div class="row row-cols-1 row-cols-md-2 g-4 bg-light m-2 p-2 rounded">
                        <ActiveTicket/>
                        <ActiveTicket/>
                        <ActiveTicket/>
                        <ActiveTicket/>
                        <ActiveTicket/>
                    </div>
            </div>
            <h3 id="CreateTicket" class="p-2 mt-3 text-white">Resolved Tickets</h3>
                <div class="row row-cols-1 row-cols-md-2 g-4 bg-light m-2 p-2 rounded">
                    <ResolvedTicket/>
                    <ResolvedTicket/>
                    <ResolvedTicket/>
                    <ResolvedTicket/>
                </div>
            
            <h3 id="CreateTicket" class="p-2 mt-3 text-white">Create Tickets</h3>
                <div class="row row-cols-1 row-cols-md-2 g-4 bg-light m-2 p-2 rounded">
                    <input id="TicketHeader"type="text"></input>
                    <input id="TicketBody"type="text"></input>
                    <button class="">Submit</button>
                </div>
        </div>
    );
};
export default Tickets;

// Implement Ticket
// 

/*
            <div class="row">
                <div>
                    <h3 id="TicketHeader" class="p-3 mt-3 text-white">Ticket submission</h3>
                    <p>If the user has any problems with an order or questions regarding how to use the system, please fill out a ticket and we will respond as quickly as possible</p>
                </div>
                <div>
                    <input type="text" id="TicketInput"></input>
                    <button></button>
                </div>
            </div>

*/