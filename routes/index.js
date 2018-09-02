const express = require('express')
const {ensureAuthenticated, ensureGuest} = require('../helpers/auth')
const router =  express.Router()

router.get('/', ensureGuest, (req, res) => {
    res.render('index/welcome')
})

router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('index/dashboard')
})

router.get('/about', (req, res) => {
    res.render('index/about')
})

module.exports = router