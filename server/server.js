const express = require('express');
const cloudinary = require('cloudinary');
const app = express();
const { con } = require('./db/connect');
let cors = require('cors');
app.use(cors());
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const orderRouter = require('./routes/orderRoute');
const paymentRouter = require('./routes/paymentRoute');
const { createTable } = require('./creatingTable/createTable');
const { order } = require('./models/OrderModel');
con.connect(function (err) {
  if (err) throw err;
  console.log('Connected! to DB');
});

cloudinary.config({
  cloud_name: 'dr54a7gze',
  api_key: '868275163814591',
  api_secret: 'U0-E-H34SF1Dl1vpyroUU361AUQ',
});

// creating table
createTable();

// routes
app.use('/auth', authRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);
app.use('/', paymentRouter);
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
