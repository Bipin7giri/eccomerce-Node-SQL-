const { con } = require('../db/connect');
const bcrypt = require('bcrypt');
const salt = 10;

const register = async (req, res) => {
  console.log(req.body);
  const body = req.body;

  body.password = await bcrypt.hash(body.password, salt);
  let query =
    'INSERT INTO user (firstname,middlename,lastname,email,password,created_at) VALUES ?';

  const userData = [
    [
      body.firstname,
      body?.middlename,
      body.lastname,
      body.email,
      body.password,
      body.created_at,
    ],
  ];
  await con.query(query, [userData], (err, result) => {
    if (err?.errno === 1062) {
      res.send(err.code);
      console.log(err);
    } else {
      res.send('added to db');
    }
  });
};

const login = (req, res, next) => {
  const email = req.body.email;
  const userPassword = req.body.password;
  // const password =
  let query = 'SELECT password FROM user WHERE email = ' + con.escape(email);
  con.query(query, function (err, result) {
    if (result.length > 0) {
      const { password } = JSON.parse(JSON.stringify(result[0]));
      bcrypt.compare(userPassword, password, function (err, status) {
        if (status === true) {
          res.send('matched');
          next();
        } else {
          res.send('incorrect ');
        }
      });
    } else {
      res.send('no email found');
    }
  });
};

module.exports = {
  register,
  login,
};
