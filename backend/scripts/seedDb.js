const mongoose = require("mongoose");
const User = require("../models/User");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/woofer"
);

const fakeUsers = [
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
    bio: "Friendly ball of fun.",
    dog: "Max",
    age: 3
  }
];

const seedData = async() => {
  try {
    await User.deleteMany({});

    for(let i = 0; i < fakeUsers.length; i++){
      User.collection.insertMany(fakeUsers[i])
    }
  console.log(`Seeds Have Been Planted`)
  } catch(err){
    console.error(err)
  }
}

seedData();
