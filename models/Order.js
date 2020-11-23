//Require Mongoose
var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var Order = new Schema({
  customer: {
    firstname: String,
    lastname: String,
    email: String
  },
  product: String,
  price: Number,
  address: {
    mailingOne: String,
    mailingTwo: String,
    city: String,
    state: String,
    zip: Number
  }
});

// Compile model from schema
var OrderModel = mongoose.model('Order', Order );

module.exports = OrderModel;