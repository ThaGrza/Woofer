const axios = require('axios');
const express = require('express');
const router = express.Router();
require('dotenv').config();

// Park data route
router.get('/getParks/:location', async (req,res) => {
  try{
    let location = req.params.location;
    let apiKey = process.env.REACT_APP_API_KEY;
    let apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog+parks+in+${location}&key=${apiKey}`
    const response = await axios.get(apiUrl);
    const parks = response.data;
    return res.status(200).json(parks);
  } catch(err){
    console.log(err);
    res.status(500).json({Error: 'Something Blew UP =('})
  }
});

// Park Image routes
router.get('/getParkImages/:reference', async (req,res) => {
  try{
    let reference = req.params.reference;
    let apiKey = process.env.REACT_APP_API_KEY;
    let apiUrl = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${reference}&sensor=false&maxheight=500&maxwidth=500&key=${apiKey}`
    const response = await axios.get(apiUrl);
    const photo = response.data;
    return res.status(200).json(photo);
  } catch(err){
    console.log(err);
    res.status(500).json({Error: 'Something Blew UP =('})
  }
});

module.exports = router;
