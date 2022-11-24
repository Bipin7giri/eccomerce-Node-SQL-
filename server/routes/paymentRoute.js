/** @format */

const { khaltiApi } = require('../khaltiPayment/khaltiContoller');
const express = require('express');
const router = express.Router();

router.post('/payment', khaltiApi);

module.exports = router;
