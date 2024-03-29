const mongoose = require("mongoose");
const db = require("../models/User");


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
    name: "Shunsui Kyoraku",
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
