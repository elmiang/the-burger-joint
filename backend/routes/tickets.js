const express = require('express')
const {
    createTicket,
    getTickets,
    getTicket,
    updateTicket
} = require('../controllers/ticketController')


const router = express.Router()

router.get('/', getTickets)

router.get('/:id', getTicket)

router.post('/', createTicket)

router.patch('/:id', updateTicket)

module.exports = router