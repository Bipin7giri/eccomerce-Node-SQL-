const { addOrder } = require('../controller/order');
const express = require('express');
const router = express.Router();

router.post('/addOrder', addOrder);

module.exports = router;
