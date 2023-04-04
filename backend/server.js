const userRoutes = require('./routes/users');
const googleParks = require('./routes/googleParks');
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

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


// Mongoose settings
mongoose.set('strictQuery', false);

// Database Connection
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/woofer"
  );


app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});