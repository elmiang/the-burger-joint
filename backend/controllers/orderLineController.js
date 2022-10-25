const Orderline = require('../models/orderLineModel');

const getOrderLines = async (req, res) => {
    const orderLines = await Orderline.find({});
    res.status(200).json(orderLines);
}

const createOrderLine = async (req, res) => {
    const {Order_id, Dish_id, OrderQuantity} = req.body

    try {
        const orderLine = await Orderline.create({Order_id, Dish_id, OrderQuantity})
        res.status(200).json(orderLine)
    }
    catch (error){
        res.status(400).json({error: error.mssg})
    }
}

module.exports = {
    getOrderLines,
    createOrderLine
}