const axios = require('axios');
const userRoutes = require('./routes/users');
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

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
app.use(userRoutes);

// var placeId;
// var config = {
//     method: 'get',
//     url: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=dog%20parks&inputtype=textquery&key=' + process.env.GOOGLE_MAPS_API_KEY,
//     headers: { }
//   };
// axios(config)
//   .then(function (response){
//     placeId = (JSON.stringify(response.data));
//     console.log(placeId);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/woofer"
  );


app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});