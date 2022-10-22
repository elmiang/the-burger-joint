const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DishSchema = new Schema({
  Dish_id: {
    type: Number,
    required: true
  },
  Category: {
    type: String,
    required: true
  },
  DishName: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Dish', DishSchema, 'Dish');