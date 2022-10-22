const Coupon = require('../models/couponModel');

// get all coupons
const getCoupons = async (req, res) => {
  const coupons = await Coupon.find({});
  res.status(200).json(coupons);
} 

module.exports = {
  getCoupons
}