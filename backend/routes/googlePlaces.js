const express = require('express');
const router = express.Router();
require('dotenv').config();


let config = {
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=dog%20parks&inputtype=textquery&key=' + process.env.GOOGLE_MAPS_API_KEY,
    headers: { }
  };


router.get('/googleTest', (req,res) => {
    return res.status(200).send({message: 'Success'});
});

module.exports = router;