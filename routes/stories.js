const express = require('express')
const passport = require('passport')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('stories/index')
})

router.get('/add', (req, res) => {
    res.render('stories/add.ejs')
})

module.exports = router