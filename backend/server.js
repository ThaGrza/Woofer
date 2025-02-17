const userRoutes = require('./routes/users');
const googleParks = require('./routes/googleParks');
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pg = require('pg');
const app = express();
const port = process.env.PORT || 3001;
require('dotenv').config();
const { Client } = pg;

// Postgresql Connection settings 
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
});


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

// ! Delete later
const testDb = async() => {
  try{
  await client.connect()
  const res = await client.query('SELECT * FROM USERS')
  await client.end()

  } catch(err){
    console.error(error.message)
  }

}
testDb()


app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
  tests();
});
