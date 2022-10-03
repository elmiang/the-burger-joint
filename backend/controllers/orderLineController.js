const Orderline = require('../models/orderLineModel');

const getOrderLines = async (req, res) => {
    const orderLines = await Orderline.find({});
    res.status(200).json(orderLines);
}

module.exports = {
    getOrderLines
}