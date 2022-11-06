const { con } = require('../db/connect');

const product = () => {
  const s = 'SHOW FULL TABLES';
  con.query(s, (err, result) => {
    let data = [];
    for (let i = 0; i < result.length; i++) {
      data.push(JSON.parse(JSON.stringify(result[i].Tables_in_ecommerce)));
    }
    if (data.includes('product') === true) {
      return;
    } else {
      let sql =
        'CREATE TABLE product(id int AUTO_INCREMENT, product_name TEXT NOT NULL, description VARCHAR(250), product_price DECIMAL NOT NULL, image VARCHAR(250), tags VARCHAR(250), slug VARCHAR(250), stock INT NOT NULL,  created_AT TIMESTAMP, category_id INT, FOREIGN KEY (category_id) REFERENCES product_category(c_id), PRIMARY KEY (id))';
      con.query(sql, (err) => {
        if (err) {
          throw err;
        }
      });
    }
  });
};
module.exports = {
  product,
};
