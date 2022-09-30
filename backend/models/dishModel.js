const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DishSchema = new Schema({
  Dish_id: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  dishname: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Dish', DishSchema, 'Dish');