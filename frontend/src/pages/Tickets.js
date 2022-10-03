import React from "react";
import { useEffect, useState } from 'react'
import ActiveTicket from "../components/ActiveTicket"
import ResolvedTicket from "../components/ResolvedTicket"



    
const Tickets = () => {
    const [tickets, setTickets] = useState(null)

    useEffect(() => {
        const fetchTickets = async () => {
            const response = await fetch('/api/tickets/')
            const json = await response.json() 

            if (response.ok) {
                setTickets(json)
            }
        }

        fetchTickets()
    }, [])


    const [ticketsRes, setTicketsRes] = useState(null)
    useEffect(() => {
        const resFetchTickets = async () => {
            const response = await fetch('/api/tickets/resolved/' + "10001")
            const json = await response.json() 

            if (response.ok) {
                setTicketsRes(json)
            }
        }

        resFetchTickets()
    }, [])


    const [user_id, setUserID] = useState('')
    const [ticket_title, setTicketTitle] = useState('')
    const [ticket_body, setTicketBody] = useState('')
    const [ticket_resolved, setTicketResolved] = useState(Boolean)
    const [error, setError] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        

        //temp hardcode
        setUserID("10001")
        setTicketResolved(false)
        const ticket = {user_id, ticket_title, ticket_body, ticket_resolved, ticket_body}

        const response = await fetch('/api/tickets', {
            method: 'POST',
            body: JSON.stringify(ticket),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTicketTitle('')
            setTicketBody('')
            setError(null)
            console.log('new ticket added', json)
            //dispatch({type: 'CREATE_TICKET', payload: json})
        }
    }

    return ( 
        <div class="container-fluid bg-secondary w-75 mt-3 p-3 border border-dark bg-dark rounded">
            <div class="row">
                {/*Ticket: Active Tickets*/}
                <h3 id="ActiveTicket" class="p-2 mt-3 text-white">Active Tickets</h3>
                    <div class="row row-cols-1 row-cols-md-2 g-4 bg-light m-2 p-2 rounded">
                        {tickets && tickets.map((ticket) => (
                            <ActiveTicket key={ticket._id} ticket={ticket}/>
                        ))}
                    </div>
            </div>
            <h3 id="ResolvedTicket" class="p-2 mt-3 text-white">Resolved Tickets</h3>
            <div class="row row-cols-1 row-cols-md-2 g-4 bg-light m-2 p-2 rounded">
                {ticketsRes && ticketsRes.map((ticket) => (
                    <ResolvedTicket key={ticket._id} ticket={ticket}/>
                ))}
            </div>
            
            
            <h3 id="CreateTicket" class="p-2 mt-3 text-white">Create Tickets</h3>
            <form className="create" onSubmit={handleSubmit}>
                <div class="d-flex flex-column align-items-center bg-light p-2 rounded">
                    <label for="TicketHeader">Ticket Subject</label>
                    <input id="TicketHeader" type="text" class="w-75"
                        onChange={(e) => setTicketTitle(e.target.value)}
                        value={ticket_title}
                    /><br/>
                    <label for="TicketBody" class="">Description of problem</label>
                    <textarea rows = "10" cols="100" id="TicketBody" class="m-2"
                        onChange={(e) => setTicketBody(e.target.value)}
                        value={ticket_body}
                    />
                    <button class="btn btn-primary btn-lg btn-block">Submit</button>
                </div>
            </form>
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

                   /* <input id="TicketBody" type="text" class="w-75"
                        onChange={(e) => setTicketBody(e.target.value)}
                        value={ticket_body}*/