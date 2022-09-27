// Profile Controller
// Profile controller will contain the backend logic needed for:
/**
 * Enabling the user to retrieve their account information
 * Edit their account information
 * View their corresponding order history
 * Delete / Close their account
 */

// Importing the mongoose and Profile Schema
const Profile = require('../models/accountModel');
const mongoose =  require('mongoose');

// Creating backend logic functions for the various profile options

// Get the user profile
const getUserProfile = async (res, req) => {

}

// Edit the user profile
const editUserProfile =  async (res, req) => {

}

// Delete the user profile
const deleteUserProfile  = async (res, req) => {

}

// View the order history of a user's account
const userOrderHistory  = async (res, req) => {

}

// Exporting the functions
module.exports = {
    getUserProfile,
    editUserProfile,
    deleteUserProfile,
    userOrderHistory
    
};