/** @format */

const axios = require('axios');
require('dotenv').config();
const { parse, stringify, toJSON, fromJSON } = require('flatted');

const khaltiApi = async (req, res) => {
  var data = {
    token: req.body.token,
    amount: 2000,
  };
  var config = {
    method: 'post',
    url: 'https://khalti.com/api/v2/payment/verify/',
    headers: {
      Authorization: 'Key test_secret_key_95010d97e2664faebc64767ddb1d9291',
      'Content-Type': 'application/json',
      Cookie:
        'f5avraaaaaaaaaaaaaaaa_session_=KGBHBINLLLKCBAJKFOFNECOEADFPHOGKAAINLBBFMNFEPKMHPDADFAJINDKIJGGOLFNDLHJHEJHHIIBAJMJAIGGJOPPHPAMPDHBPICEEPKIPEFMECMNHMGAKJKCDBJMK; TS01df5cb2=016ebf7016dd5bc50445752b87a26e902ba051df14e7df8f3a02e1e5f526482af4b8cdadbef5df47817e13407b3a2bca12ff8cebec974260a05478e7dae41a3efe530769f4e28e68eeb96ac9b8b3a79b93deec141a; TS01df5cb2028=0123ed50723a29cf4244750e8ed56dff601681f75c44cd7d0063eb8c90d13f03295fd04f53ecd2c57f9e6ae2b892c14b14452c7024; sessioncookie=!2jMFv4j9niZ4wbf+uG4VdyH/IwQ2n/Cvmbe262O1DUdLrE4vPe6Xe1nGa50vT7JlTC2rc3qC+D/amg==',
    },
    data: data,
  };
  axios(config)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.json(error);
      console.log(error);
    });
};
module.exports = { khaltiApi };
