const express = require('express')
const {
    createTicket,
    getTickets,
    getTicket,
    updateTicket,
    deleteTicket,
    getUserTickets,
    getUnresolvedTicket,
    getResolvedTicket
} = require('../controllers/ticketController')


const router = express.Router()
// Not applicable
//router.get('/', getTickets)

// Not Applicable
//router.get('/:id', getTicket)

// For users to create tickets
router.post('/', createTicket)

// For admins to resolve tickets (update)
router.patch('/:id', updateTicket)

// For user to delete tickets
router.delete('/:id', deleteTicket)

// For users to view tickets attached to their account
router.get('/:id', getUserTickets)

// For admins to view unresolved tickets
router.get('/', getUnresolvedTicket)

// For user to view resolved tickets attached to their account
router.get('/resolved/:id', getResolvedTicket)

module.exports = router