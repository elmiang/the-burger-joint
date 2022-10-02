const express = require('express');
const { getDishes } = require('../controllers/dishController');

const router = express.Router();

router.get('/', getDishes);

module.exports = router;