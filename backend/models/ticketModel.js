const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ticketSchema = new Schema ({

    user_id: {
        type: String,
        required: true 
    },
    
    ticket_title: {
        type: String,
        required: true
    },

    ticket_body: {
        type: String,
        required: true
    },

    ticket_resolved: {
        type: Boolean,
        required: true
    },

    resolution_body: {
        type: String,
        required: false
    }

}, { timestamps: true})

module.exports = mongoose.model('tickettModel', ticketSchema);