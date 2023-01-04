const multer = require('multer');

const { v4: uuidv4 } = require('uuid');
const path = require('path');
// const upload = multer({ dest: '../client/src/assets/images' });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../admin/src/assets/images');
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
  },
});
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
let upload = multer({ storage, fileFilter });

const {
  addCateogry,
  getAllCateogry,
} = require('../controller/productCategory');
const {
  addProduct,
  getProduct,
  editProduct,
  deleteProduct,
  getProductById,
} = require('../controller/product');
const express = require('express');
const router = express.Router();

router.post('/addCategory', addCateogry);
router.post('/addProduct', upload.single('image'), addProduct);
router.get('/allProduct', getProduct);
router.put('/editProduct/:id', upload.single('image'), editProduct);
router.get('/getallcategory', getAllCateogry);
router.delete('/deleteProduct/:id', deleteProduct);
router.get('/getproduct/:id', getProductById);

module.exports = router;
