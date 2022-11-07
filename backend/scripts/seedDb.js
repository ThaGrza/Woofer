const mongoose = require("mongoose");
const db = require("../models/User");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/woofer"
);

const userSeed = [
  {
    name: "Andrew Griswold",
    dog: "Harlow",
    bio:
      "Friendly but shy, the love of my life, Oh to be in your presence is such a joy.",
    age: 4
  },
  {
    name: "Mayuri Kurotsuchi",
    dog: "Nemu",
    bio:
      "A perfect specimen of a daughter.",
    age: 18
  },
  {
    name: "Shunsui something",
    dog: "Lisa",
    bio:
      "Pervert.",
    age: 19
  },
  {
    name: "McKayla McQuate",
    dog: "Andrew",
    bio:
      "Super nice but scary.",
    age: 27
  },
  {
    name: "Emily Alquiza",
    dog: "Max",
    bio:
      "Friendly ball of fun.",
    age: 3
  }
];

db.User
  .remove({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then(data => {
    console.log("Records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });