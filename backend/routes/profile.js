// Routes for the profile

// Imports for express and controller functions
const express = require('express');
const {
    getUserProfile, updateUserProfile, deleteUserProfile,
    userOrderHistory,
    updateUserCoupons
 } = require('../controllers/profileController')

// Creating a router
const router = express.Router();

// Creating route for the user profile
router.get('/:id', getUserProfile);

// Creating route for getting editing the user profile
router.patch('/:id', updateUserProfile);

// Creating route for deleting the user profile
router.delete('/:id', deleteUserProfile);

// Creating route for retrieving the order history of a user
router.get('/:id/orders', userOrderHistory);

// Creating route for updating the user coupon status
router.patch('/coupon/:id', updateUserCoupons);

// Exporting the routes within the router
module.exports = router;

