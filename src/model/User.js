const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthDay: {
    type: Number,
    required: true,
  },
  birthMonth: {
    type: Number,
    required: true,
  },
  birthYear: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: String,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", UserSchema);
