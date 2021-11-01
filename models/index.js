const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //공백제거
    unique: 1,
  },
  role: {
    type: Number,
    default: 0,
  },
  password: { type: String, minlength: 5 },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = { User };
