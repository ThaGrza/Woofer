const Axios = require('axios');
const express = require('express');
const router = express.Router();
require('dotenv').config();





let config = {
    method: 'get',
    url: "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Dog%20Parks&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=" + process.env.REACT_APP_API_KEY,
    headers: { }
};

router.post('/parkLocation', (req,res) => {
  return res.send(req)
  // console.log(req);
  // console.log(res);
  // Axios.request(config)
  // .then(res => {
  //   // console.log(res.data);
  // }).catch(err => {
  //   console.log("Error: " + err);
  //   console.log("Google Api Error: " + err.response.data.error);
  // })
});


router.get('/getParks', (req,res) => {
    return res.status(200).send({message: 'Success hitting /getParks'});
});

module.exports = router;