const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ticketSchema = new Schema ({

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

    creation_date: {
        type: String,
        required: true
    },

    resolved_date: {
        type: String,
        required: false
    },

    resolution_body: {
        type: String,
        required: false
}

}, { timestamps: true})

module.exports = mongoose.model('tickettModel', ticketSchema);