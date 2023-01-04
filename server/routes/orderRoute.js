const { addOrder, getOrder, getAllOrder } = require('../controller/order');
const express = require('express');
const router = express.Router();

router.post('/addOrder', addOrder);
router.get('/orderlist/:email', getOrder);
router.get('/allOrder',getAllOrder)

module.exports = router;
