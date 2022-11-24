const { con } = require('../db/connect');

const order = async () => {
  const s = 'SHOW FULL TABLES';
  await con.query(s, (err, result) => {
    let data = [];
    for (let i = 0; i < result.length; i++) {
      data.push(JSON.parse(JSON.stringify(result[i].Tables_in_ecommerce)));
    }

    if (data.includes('orders') === true) {
      return;
    } else {
      let sql =
        'CREATE TABLE orders(id int AUTO_INCREMENT, payment_id VARCHAR(255) NOT NULL, payment_by VARCHAR(250) NOT NULL,  paid_amount INT,created_AT TIMESTAMP, user_id INT, product_id INT, FOREIGN KEY (product_id) REFERENCES product(id), FOREIGN KEY (user_id) REFERENCES user(id), PRIMARY KEY (id))';
      con.query(sql, (err) => {
        if (err) {
          throw err;
        }
      });
    }
  });
};
module.exports = {
  order,
};
