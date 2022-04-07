const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  img: { type: String, required: true },
});

const Items = mongoose.model("Items", itemSchema);

module.exports = Items;
