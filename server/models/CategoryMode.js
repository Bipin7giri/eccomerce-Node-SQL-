const { con } = require('../db/connect');

const productCategory = () => {
  const s = 'SHOW FULL TABLES';
  con.query(s, (err, result) => {
    let data = [];
    for (let i = 0; i < result.length; i++) {
      data.push(JSON.parse(JSON.stringify(result[i].Tables_in_ecommerce)));
    }
    if (data.includes('product_category') === true) {
      return;
    } else {
      let sql =
        'CREATE TABLE product_category(c_id int AUTO_INCREMENT, name VARCHAR(250) NOT NULL, image VARCHAR(250), c_description VARCHAR(400), created_at TIMESTAMP, PRIMARY KEY(c_id) )';
      con.query(sql, (err) => {
        if (err) {
          throw err;
        }
      });
    }
  });
};
module.exports = {
  productCategory,
};
