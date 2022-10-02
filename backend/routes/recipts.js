const express = require('express')
const {
    createRecipt,
    getRecipts,
    getRecipt
} = require('../controllers/reciptController')


const router = express.Router()

router.get('/', getRecipts)

router.get('/:id', getRecipt)

router.post('/', createRecipt)

module.exports = router