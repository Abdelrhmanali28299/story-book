const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('./keys')

module.exports = function(passport){
    passport.use(
        new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        }, (accessToken, refreshToken, profile, done)=>{
            let image = profile.photos[0].value.substring(0,profile.photos[0].value.indexOf('?'))
            console.log(image)
        })
    )
}