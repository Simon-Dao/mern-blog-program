const express = require('express')
const mongoose = require('mongoose')
const getDate = require('../markdown-blog/utils')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const dataRouter = require('./api/data')
const app = express()
const PORT = 5000

mongoose.connect('mongodb://localhost/blog',{ useNewUrlParser: true, useUnifiedTopology: true })

app.set('view engine','ejs')

app.use(express.urlencoded({ extended: false }))

app.get('/', async (req,res) => {
    const articles = await Article.find()
    res.render('articles/index', {articles: articles})
})

app.use('/articles', articleRouter)
app.use('/api', dataRouter)

app.listen(PORT)
console.log('listening on port '+PORT)