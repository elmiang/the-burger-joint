const express = require('express');
const { getExtras } = require('../controllers/extrasController')

const router = express.Router();

// GET all extras
router.get('/', getExtras);

module.exports = router;