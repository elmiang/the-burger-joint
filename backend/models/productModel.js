const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  Dish_id: {
    type: Number,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  dishname: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  ingredients: {
    type: Array,
  },
  imageURL: {
    type: String,
  },
});

module.exports = mongoose.model("Dish", productSchema, "Dish");
