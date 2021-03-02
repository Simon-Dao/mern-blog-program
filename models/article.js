const mongoose = require('mongoose')
const getDate = require('../utils')

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    markdown: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: getDate
    }
})

module.exports = mongoose.model('Article',articleSchema)