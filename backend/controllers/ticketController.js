const Ticket = require('../models/ticketModel')
const mongoose = require ('mongoose')

// GET all tickets
const getTickets = async (req, res) => {
    const ticket = await Ticket.find({}).sort({createdAt: -1})
    res.status(200).json(ticket)
}

// GET a ticket
const getTicket = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such ticket'})
    }

    const ticket = await Ticket.findById(id)

    if (!ticket) {
        return res.status(404).json({error: 'no such ticket'})
    }

    res.status(200).json(ticket)
}

// Create a new ticket
const createTicket = async (req, res) => {
    const {user_id, ticket_title, ticket_body, ticket_resolved, resolution_body} = req.body

    try {
        const ticket = await Ticket.create({user_id, ticket_title, ticket_body, ticket_resolved, resolution_body})
        res.status(200).json(ticket)
    }
    catch (error){
        res.status(400).json({error: error.mssg})
    }
}

// PATCH ticket I.e. resolving them
const updateTicket = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such ticket'})
    }

    const ticket = await Ticket.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!ticket) {
        return res.status(404).json({error: 'no such ticket'})
    }

    res.status(200).json(ticket)
}

//DELETE Ticket
const deleteTicket = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such ticket'})
    }

    const ticket = await Ticket.findOneAndDelete({_id: id})

    if (!ticket) {
        return res.status(404).json({error: 'no such ticket'})
    }

    res.status(200).json(ticket)
}

module.exports = {
    getTickets,
    getTicket,
    createTicket,
    updateTicket,
    deleteTicket
}