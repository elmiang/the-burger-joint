const express = require('express');
const { getCoupons } = require('../controllers/couponController')

const router = express.Router();

// GET all coupons
router.get('/', getCoupons);

module.exports = router;