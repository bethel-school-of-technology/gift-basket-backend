//Require Mongoose
var mongoose = require('mongoose');
const shortid = require('shortid');

// Define schema
var Schema = mongoose.Schema;

var Order = new Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  email: String,
  name: String,
  address: String,
  total: Number,
  cartItems: [{
    _id: String,
    title: String,
    price: Number,
    count: Number, 
  },
  ],
},
  {
    timestamps: true,
  }
);

// Compile model from schema
var OrderModel = mongoose.model('Order', Order );

module.exports = OrderModel;