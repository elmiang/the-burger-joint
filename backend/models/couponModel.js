const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CouponSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  rate: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Coupon', CouponSchema, 'Coupon');