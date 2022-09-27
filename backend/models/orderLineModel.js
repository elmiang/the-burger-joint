const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderLineSchema = new Schema({
  Order_id: {
    type: Number,
    required: true
  },
  Dish_id: {
    type: Number,
    required: true
  },
  OrderQuantity: {
    type: Number,
    required: true
  },
  TotalPrice: {
    type: Number,
    required: true
  }
  
});

module.exports = mongoose.model('OrderLine', OrderLineSchema, 'OrderLine');