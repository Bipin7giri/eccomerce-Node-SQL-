const { con } = require('../db/connect');
const addProduct = async (req, res) => {
  const {
    product_name,
    product_price,
    description,
    image = req.file.filename,
    tags,
    slug,
    stock,
    category_id,
  } = req.body;
  let query =
    'INSERT INTO product (product_name, description, product_price, image, tags, slug, stock, category_id) VALUES ?';

  const productData = [
    [
      product_name,
      description,
      product_price,
      image,
      tags,
      slug,
      stock,
      category_id,
    ],
  ];

  con.query(query, [productData], (err, result) => {
    if (err?.errno === 1062) {
      res.send(err.code);
      console.log(err);
    } else {
      console.log(result);
      res.send('added to db');
    }
  });
};

const getProduct = async (req, res) => {
  let query =
    'SELECT * FROM product INNER JOIN product_category as c ON product.category_id=c.c_id';
  con.query(query, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
};

const editProduct = async (req, res) => {
  const { id } = req.params;
  const {
    product_name,
    product_price,
    description,
    image = req.file.filename,
    tags,
    slug,
    stock,
    category_id,
  } = req.body;
  console.log(id);

  var query =
    'UPDATE product SET product_name = ?, description =?,  product_price =?, image=?, tags=?, slug=?, stock=?, category_id=? WHERE id=?';

  await con.query(
    query,
    [
      product_name,
      description,
      product_price,
      image,
      tags,
      slug,
      stock,
      category_id,
      id,
    ],
    (err, data) => {
      if (err) {
        console.log(err);

        return res.status(500).json(err);
      }
      console.log(data);
      return res.json('updated');
    }
  );
};

const deleteProduct = async (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;
  let query = 'DELETE FROM product WHERE id = ?';
  await con.query(query, id, function (err, result) {
    if (err) return res.status(500).json(err);
    return res.json('delete');
  });
};

module.exports = {
  addProduct,
  getProduct,
  editProduct,
  deleteProduct,
};
