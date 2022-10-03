const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  Order_id: {
    type: Number,
    required: true
  },
  User_id: {
    type: String,
    required: true
  },
  Payment_id: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Order', OrderSchema, 'Order');