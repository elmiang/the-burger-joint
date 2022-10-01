const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExtraSchema = new Schema({
  Extras_id: {
    type: Number,
    required: true
  },
  item: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Extra', ExtraSchema, 'Extra');