const mongoose = require("mongoose");
const shortid = require("shortid");

const productsSchema = new mongoose.Schema({
  _id: { type: Number, default: shortid.generate },
  title: String,
  description: String,
  image: String,
  price: Number,
});

module.exports = mongoose.model("Products", productsSchema);
