const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String },
  firstName: { type: String },
  surname: { type: String },
  password: { type: String },
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
