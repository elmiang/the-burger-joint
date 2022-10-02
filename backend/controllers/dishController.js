const Dish = require('../models/dishModel');

const getDishes = async (req, res) => {
    const dishes = await Dish.find({});
    res.status(200).json(dishes);
}

module.exports = {
    getDishes
}