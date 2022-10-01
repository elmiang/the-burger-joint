// Profile Controller
 const mongoose =  require('mongoose');

// Importing the mongoose and Profile Schema
const Profile = require('../models/accountModel');
const Order = require('../models/orderModel');
const OrderLine = require('../models/orderLineModel');
const Dish = require('../models/dishModel');



// Get the user profile
const getUserProfile = async (req, res) => {
    // Get the email from the JWT token in the request
    const email = req.params.id;
    // Find 
    Profile.findOne({email: email}, function(err, data) {
        if (err) {
            console.log(err);
            return res.status(404).json({error: 'No such account exists'})
        }
        res.status(200).json(data);
    });
}

// Edit the user profile
const updateUserProfile =  async (req, res) => {
    // Get the email (primary identifier)
    const email = req.params.id;

    // Update the Profile
    const profile = await Profile.findOneAndUpdate({email: email}, {
        ...req.body
    })

    // Check that the update was not null
    if (!profile) {
        return res.status(404).json({error: 'No such account exists'})
    }

    // Return 200 status, indicating that the profile had been updated
    res.status(200).json(profile)
}

// Delete the user profile
const deleteUserProfile  = async (req, res) => {
    // Get the email
    const email = req.params.id;

    // Delete the email from the DB
    const profile = await Profile.findOneAndDelete({email: email})

    // Check that the delete was successful
    if (!profile) {
        return res.status(404).json({error: 'No such account exists'})
    }
    res.status(200).json(profile);
}

// View the order history of a user's account
const userOrderHistory  = async (req, res) => {
    // Get the user ID
    const userId = req.params.id;

    // Retrieve the orders for the specified account
    const orderHistory = [];

    const orders = await Order.find({User_id: userId});

    // Loop through each order and retrieve order lines
    await Promise.all(
        orders.map( async (order) => {  
            // Retrieve order lines for this order
            const orderLines = await OrderLine.find({Order_id: order.Order_id});

            // Add order and order lines to order history
            orderHistory.push({
                order: order,
                orderLines: orderLines
            });
        })
    );

    // Return orders
    res.status(200).json(orderHistory);
}

// Exporting the functions
module.exports = {
    getUserProfile,
    updateUserProfile,
    deleteUserProfile,
    userOrderHistory  
};