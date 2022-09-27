// Routes for the profile

// Imports for express and controller functions
const express = require('express');
const {  } = require('../controllers/profileController')

// Creating a router
const router = express.Router();

// Creating route for the user profile
router.get("/:id", getUserProfile);

// Creating route for getting editing the user profile
router.get("/:id", editUserProfile);

// Creating route for deleting the user profile
router.get("/:id", deleteUserProfile);

// Creating route for retrieving the order history of a user
router.get("/:id", userOrderHistory);

