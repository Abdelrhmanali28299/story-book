const express = require('express')
const {ensureAuthenticated} = require('../helpers/auth')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('stories/index')
})

router.get('/add', ensureAuthenticated, (req, res) => {
    res.render('stories/add.ejs')
})

router.post('/add', (req, res) => {
    console.log(req.body)
    res.send('lol')
})

module.exports = router