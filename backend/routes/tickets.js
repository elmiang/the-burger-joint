const express = require('express')
const {
    createTicket,
    getTickets,
    getTicket,
    updateTicket,
    deleteTicket
} = require('../controllers/ticketController')


const router = express.Router()

router.get('/', getTickets)

router.get('/:id', getTicket)

router.post('/', createTicket)

router.patch('/:id', updateTicket)

router.delete('/:id', deleteTicket)

module.exports = router