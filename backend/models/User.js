const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true},
  password: {type: String, required: true, unique: false},
  name: { type: String, required: true },
  dog: { type: String, required: true },
  bio: String,
  age: { type: Number, required: true }
});

module.exports = mongoose.model('Users', UserSchema);