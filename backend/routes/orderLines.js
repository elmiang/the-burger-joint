const express = require('express');
const { getOrderLines } = require('../controllers/orderLineController');

const router = express.Router();

router.get('/', getOrderLines);

module.exports = router;