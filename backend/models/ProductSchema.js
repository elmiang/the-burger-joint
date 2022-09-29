const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  Dish_id: {
    type: Number,
    required: true,
    unique: true,
  },
  Category: {
    type: String,
    required: true,
  },
  DishName: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Description: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
