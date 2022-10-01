// MongoDB Schema model for the profile
// Currently the user account already has the email, username and password stored (from auth0)
// Need to amend the current profile with the residential address, Name (First and Last) and payment (which will need to be linked )

// Defining imports
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// Defining the account Profile Schema
/**
 * First
 * Last
 * Email
 * Address
 * Phone
 * PaymentID - Fetched from another schema / collection
 * OrderID - Fetched from another schema / collection
 */

// Defining the profile schema
const profileSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: false
    },
    lastName:{
        type: String,
        required: false
    },
    residentialAddress:{
        type: String,
        required: false
    },
    phoneNumber:{
        type: Number,
        required: false
    },

}, {timestamps: true})

// Exporting the Schema
module.exports = mongoose.model('Profile', profileSchema, 'User');