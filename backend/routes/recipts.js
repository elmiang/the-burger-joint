const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'GET all recipts'})
})

router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single recipt'})
})

router.post('/', (req, res) => {
    const {Recipt_ID, User_ID}
    res.json({mssg: 'POST a new recipt'})
})

module.exports = router