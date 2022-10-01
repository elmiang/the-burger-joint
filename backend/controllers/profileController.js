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
    // Get the email
    const email = req.params.id;

    // Retrieve the details of the account
    Profile.findOne({email: email}, function(err, data) {
        if (err) {
            console.log(err);
            return res.status(404).json({error: 'No such account exists'})
        }
        res.status(200).json(data);
    });

}

// Exporting the functions
module.exports = {
    getUserProfile,
    updateUserProfile,
    deleteUserProfile,
    userOrderHistory  
};