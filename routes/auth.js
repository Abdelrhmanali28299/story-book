const express = require('express')
const passport = require('passport')
const router =  express.Router()

router.get('/google', passport.authenticate('google',{
    scope: ['profile', 'email']
}))

router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), (req,res)=>{
    console.log('lol')
    res.redirect('/')
})

module.exports = router