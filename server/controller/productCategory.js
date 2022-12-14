const { con } = require('../db/connect');
const addCateogry = async (req, res) => {
  const { name } = req.body;
  const { description } = req.body;

  let query = 'INSERT INTO product_category (name,c_description) VALUES ?';

  const userData = [[name, description]];
  await con.query(query, [userData], (err, result) => {
    if (err?.errno === 1062) {
      res.send(err.code);
      console.log(err);
    } else {
      res.send('added to db');
    }
  });
};
const getAllCateogry = async (req, res) => {
  let query = 'SELECT *  FROM product_category';
  con.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
};
module.exports = {
  addCateogry,
  getAllCateogry,
};
