const mongoose = require('mongoose')
const getDate = require('../utils')
const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const domPurify = createDomPurify(new JSDOM().window)

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
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    sanitizedHTML: {
        type: String,
        required: true
    }
})

articleSchema.pre('validate', function(next) {
    if (this.title) {
        this.slug = slugify(this.title, {lower: true, strict: true})
    }

    if(this.markdown) {
        this.sanitizedHTML = domPurify.sanitize(marked(this.markdown))
    }

    next()
})

module.exports = mongoose.model('Article',articleSchema)