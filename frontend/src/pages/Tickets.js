import React from "react";
import { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import ActiveTicket from "../components/ActiveTicket"
import ResolvedTicket from "../components/ResolvedTicket"

const baseurl = process.env.REACT_APP_BACKEND_API_URL;   

const Tickets = () => {
    const [tickets, setTickets] = useState(null) 
    const { user, getAccessTokenSilently } = useAuth0();
    // GETS method, fetching active/ongoing tickets with equivalent user ID
    useEffect(() => {
        const fetchTickets = async () => {
            try{
                const accessToken = await getAccessTokenSilently();
                const response = await fetch(`${baseurl}/api/tickets/`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json"            
                    },    
                });
                const json = await response.json() 
                if (response.ok) {
                setTickets(json)
            }
            }
            catch{
                console.log("Failed to fetch user tickets")
            }
            
        }

        fetchTickets()
    }, [])

    // GETS method, fetching resolved tickets with equivalent user ID
    const [ticketsRes, setTicketsRes] = useState(null)
    useEffect(() => {
        const resFetchTickets = async () => {
            try{
                const accessToken = await getAccessTokenSilently();       
                const response = await fetch(`${baseurl}/api/tickets/`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json"            
                    },                        
                });
                const json = await response.json() 

                if (response.ok) {
                    setTicketsRes(json)
                }
            }
            catch{
                console.log("Failed to fetch users resolved tickets")
            }
        }

        resFetchTickets()
    }, [])

    // Initialising variables for ticket creation
    const [user_id, setUserID] = useState('')
    const [ticket_title, setTicketTitle] = useState('')
    const [ticket_body, setTicketBody] = useState('')
    const [ticket_resolved, setTicketResolved] = useState(Boolean)
    const [error, setError] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        // User Id is fetched to attach to the tickets
        setUserID(user.email)
        
        // New tickets default to unresolved status
        setTicketResolved(false)
        // Ticket body is created containing all set values
        const ticket = {user_id, ticket_title, ticket_body, ticket_resolved, ticket_body}
        const accessToken = await getAccessTokenSilently();
        // Ticket is posted (created), to controler using api routes
        const response = await fetch(`${baseurl}/api/tickets/`, {
            method: 'POST',
            body: JSON.stringify(ticket),
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            // Clear all ticket values after successful creation
            setTicketTitle('')
            setTicketBody('')
            setError(null)
            console.log('new ticket added', json)
            window.location.href = "/menu"
        }
    }

    return ( 
        <div className="container-fluid bg-secondary w-75 mt-3 p-3 border border-dark bg-dark rounded">
            <div className="row">
                {/*Ticket: Active Tickets*/}
                <h3 id="ActiveTicket" className="p-2 mt-3 text-white">Active Tickets</h3>
                    <div className="row row-cols-1 row-cols-md-2 g-4 bg-light m-2 p-2 rounded">
                        {tickets && tickets.map((ticket) => (
                            <ActiveTicket key={ticket._id} ticket={ticket}/>
                        ))}
                    </div>
            </div>
            <h3 id="ResolvedTicket" className="p-2 mt-3 text-white">Resolved Tickets</h3>
            <div className="row row-cols-1 row-cols-md-2 g-4 bg-light m-2 p-2 rounded">
                {ticketsRes && ticketsRes.map((ticket) => (
                    <ResolvedTicket key={ticket._id} ticket={ticket}/>
                ))}
            </div>
            
            
            <h3 id="CreateTicket" className="p-2 mt-3 text-white">Create Tickets</h3>
            <form className="create" onSubmit={handleSubmit}>
                <div className="d-flex flex-column align-items-center bg-light p-2 rounded">
                    <label htmlFor="TicketHeader">Ticket Subject</label>
                    <input id="TicketHeader" type="text" className="w-75"
                        onChange={(e) => setTicketTitle(e.target.value)}
                        value={ticket_title} required
                    /><br/>
                    <label htmlFor="TicketBody" className="">Description of problem</label>
                    <textarea rows = "10" cols="100" id="TicketBody" className="m-2"
                        onChange={(e) => setTicketBody(e.target.value)}
                        value={ticket_body} required
                    />
                    <button className="btn btn-primary btn-lg btn-block">Submit</button>
                </div>
            </form>
        </div>
    );
};
export default Tickets;