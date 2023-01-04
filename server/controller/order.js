const { con } = require('../db/connect');
const addOrder = async (req, res) => {

  const length = req.body.cart.length;
  const { user_id } = req.body;
  const { payment_id } = req.body;

  let product_id = [];
  let paid_amount = [];

  for (let i = 0; i < length; i++) {
    product_id.push(req.body.cart[i].id);
    paid_amount.push(req.body.cart[i].product_price);
  }

  let values = [];
  for (let i = 0; i < length; i++) {
    values.push([]);
  }

  for (let i = 0; i < length; i++) {
    values[i].push(
      payment_id,
      'khalti',
      paid_amount[i],
      user_id,
      product_id[i],
    );
  }

  let query =
    'INSERT INTO orders ( payment_id, payment_by, paid_amount, user_id, product_id) VALUES ?';
  con.query(query, [values], function (err) {
    if (err) throw err;
  });

  // decrease stock
  let query2 = 'Update product set stock  = stock - 1 WHERE id=?';
  for (let i = 0; i < product_id.length; i++) {
    await con.query(query2, product_id[i], (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  }
};
const getOrder = async (req, res) => {
  const email = req.params.email;
  let query =
    'SELECT orders.id, orders.payment_id, orders.payment_by, orders.paid_amount, orders.created_AT, p.product_name, p.image, u.firstname, u.lastname FROM orders INNER JOIN user as u ON orders.user_id = u.id INNER JOIN product as p ON orders.product_id = p.id WHERE u.email =' +
    con.escape(email);
  con.query(query, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
};
const getAllOrder = async (req, res) => {
  let query ='SELECT orders.id, orders.payment_id, orders.payment_by, orders.paid_amount, orders.created_AT, p.product_name, p.image, u.firstname, u.lastname FROM orders INNER JOIN user as u ON orders.user_id = u.id INNER JOIN product as p ON orders.product_id = p.id';
  con.query(query, function (err, result) {
    if (err) throw err;
    console.log(result)
    res.json(result);
  });
};


module.exports = {
  addOrder,
  getOrder,
  getAllOrder
};
