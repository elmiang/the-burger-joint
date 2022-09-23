const Extra = require('../models/extrasModel');

// get all extra ingredients
const getExtras = async (req, res) => {
  const extras = await Extra.find({});
  res.status(200).json(extras);
} 

module.exports = {
  getExtras
}