const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const heroSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  attribute: { type: String, required: true },
  roles: { type: [String], required: true },
  img: { type: String, required: true },
});

const Heroes = mongoose.model("Heroes", heroSchema);

module.exports = Heroes;
