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

//router.get('/', getTickets)

//router.get('/:id', getTicket)

router.post('/', createTicket)

router.patch('/:id', updateTicket)

router.delete('/:id', deleteTicket)

router.get('/', getUserTickets)

router.get('/unresolved', getUnresolvedTicket)

router.get('/resolved/:id', getResolvedTicket)

module.exports = router