const { addOrder, getOrder } = require('../controller/order');
const express = require('express');
const router = express.Router();

router.post('/addOrder', addOrder);
router.get('/orderlist/:email', getOrder);

module.exports = router;
