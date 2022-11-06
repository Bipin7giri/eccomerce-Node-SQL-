const { con } = require('../db/connect');
const addOrder = async (req, res) => {
  const { id } = req.params;
  const { user_id, product_id, paid_amount } = req.body;
  console.log(req.body);
};

module.exports = {
  addOrder,
};
