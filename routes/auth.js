const express = require('express')
const router =  express.Router()
const passport = require('passport')

router.get('/google', passport.authenticate('google',{
    scope: ['profile', 'email']
}))

router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), (req,res)=>{
    console.log('lol')
    res.redirect('/')
})

module.exports = router