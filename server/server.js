const express = require('express');

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
const { createTable } = require('./creatingTable/createTable');
con.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});

// creating table
createTable();

// routes
app.use('/auth', authRouter);
app.use('/product', productRouter);

app.use('/order', orderRouter);

const port = process.env.PORT;
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
