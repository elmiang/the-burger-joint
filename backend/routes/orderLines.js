const express = require('express');
const { getOrderLines, createOrderLine } = require('../controllers/orderLineController');

const router = express.Router();

router.get('/', getOrderLines);

router.post('/', createOrderLine);

module.exports = router;