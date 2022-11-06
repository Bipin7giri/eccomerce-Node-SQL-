const { con } = require('../db/connect');

const user = () => {
  const s = 'SHOW FULL TABLES';

  con.query(s, (err, result) => {
    let data = [];
    for (let i = 0; i < result.length; i++) {
      data.push(JSON.parse(JSON.stringify(result[i].Tables_in_ecommerce)));
    }
    if (data.includes('user') === true) {
      return;
    } else {
      let sql =
        'CREATE TABLE user(id int AUTO_INCREMENT, firstname VARCHAR(255)  NOT NULL, middlename VARCHAR(255) NULL, lastname VARCHAR(255)  NOT NULL, email VARCHAR(255)  NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, created_at TIMESTAMP, PRIMARY KEY(id))';
      con.query(sql, (err) => {
        if (err) {
          throw err;
        }
      });
    }
    console.log(data.includes('user'));
  });
};
module.exports = {
  user,
};
