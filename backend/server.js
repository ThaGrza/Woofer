const userRoutes = require('./routes/users');
const googleParks = require('./routes/googleParks');
const axios = require('axios');
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
require('dotenv').config();


// Middleware
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  })
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(userRoutes, googleParks);


const tests = async() => {
  let apiKey = process.env.REACT_APP_API_KEY;
  let location = "Bedford";
  let apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog+parks+in+${location}&key=${apiKey}`
  try{
    let response = axios.get(apiUrl);
    const data = response.data;
    console.log("test data googleMapPlaceSearch:", data);
  }catch(err){
    console.log("error:", err)
  }
}
// Mongoose settings
mongoose.set('strictQuery', true);

// Database Connection
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1/woofer"
  );


app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
  tests();
});