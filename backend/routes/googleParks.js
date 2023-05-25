const axios = require('axios');
const express = require('express');
const router = express.Router();
require('dotenv').config();


router.get('/getParks/:location', async (req,res) => {
  try{
      console.log("You did it");
    let location = req.params.location;
    let apiKey = process.env.REACT_APP_API_KEY;
    let apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog+parks+in+${location}&key=${apiKey}`
    const response = await axios.get(apiUrl);
    const parks = response.data;
    console.log(parks);
    return res.status(200).json(parks);
  } catch(err){
    console.log(err);
    res.status(500).json({Error: 'Something Blew UP =('})
  }
});

module.exports = router;
