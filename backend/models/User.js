const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  dog: { type: String, required: true },
  bio: String,
  age: { type: Number, required: true }
});

module.exports = mongoose.model('Users', UserSchema);