const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reciptSchema = new Schema ({

    User_ID: {
        type: String,
        required: false
    },

    Payment_Type: {
        type: String,
        required: true
    },

    Card_No: {
        type: String,
        required: true
    },

    Card_Exp: {
        type: String,
        required: true 
    },

    Card_CSV: {
        type: String,
        required: true
    },

    Address_One: {
        type: String,
        required: true
    },

    Address_Two: {
        type: String,
        required: false
    },

    Address_City: {
        type: String,
        required: true
    },

    Address_Country: {
        type: String,
        required: true
    },

    Contact_FName: {
        type: String,
        required: true
    },

    Contact_SName: {
        type: String,
        required: true
    },
    
    Contact_Email: {
        type: String,
        required: true
    },

    Contact_Phone: {
        type: String,
        required: false
    },

    Items: {
        type:String,
        required: true
    },

    /*Items: [
        {
            Item_ID: String,
            Item_Name: String,
            Item_Quantity: String,
            Item_Price: String
        }
    ],*/

    total_price: {
        type: String,
        required: true
    }

}, { timestamps: true})

module.exports = mongoose.model('reciptModel', reciptSchema);