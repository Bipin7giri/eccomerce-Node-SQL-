const { user } = require('../models/UserModel');
const { productCategory } = require('../models/CategoryMode');
const { product } = require('../models/ProductModel');
const { order } = require('../models/OrderModel');

const createTable = () => {
  user();
  productCategory();
  product();
  order();
};
module.exports = {
  createTable,
};
