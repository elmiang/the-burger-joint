import React from "react";
import { useEffect, useState } from 'react'
import ResolvingTicket from '../components/ResolvingTicket'



const baseurl = process.env.REACT_APP_BACKEND_API_URL; 
    
const Tickets = () => {
    const [tickets, setTickets] = useState(null)


    
    useEffect(() => {
        const fetchTickets = async () => {
            const response = await fetch(`${baseurl}/api/tickets/`)
            const json = await response.json() 

            if (response.ok) {
                setTickets(json)
            }
        }

        fetchTickets()
    }, [])

    return ( 
        <div class="container-fluid bg-secondary w-75 mt-3 p-3 border border-dark bg-dark rounded">
            <div class="row">
                {/*AdminTicket: Active Tickets*/}
                <h3 id="ResolvingTicket" class="p-2 mt-3 text-white">Tickets to be resolved</h3>
                    <div class="row row-cols-1 row-cols-md-2 g-4 bg-light m-2 p-2 rounded">
                        {tickets && tickets.map((ticket) => (
                            <ResolvingTicket key={ticket._id} ticket={ticket}/>
                        ))}
                    </div>
            </div>
        </div>
    );
};
export default Tickets;
//<input id="TicketBody" type="text" class="w-75 h-100"></input><br/>
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




/*                    <textarea rows = "10" cols="100" id="TicketBody" class="m-2"
                        onChange={(e) => setTicketBody(e.target.value)}
                        value={ticket_body}
                    />*/