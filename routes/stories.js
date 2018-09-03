const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/User')
const Story = require('../models/story')
const { ensureAuthenticated } = require('../helpers/auth')

const router = express.Router()

router.get('/', (req, res) => {
    Story
        .find({ status: 'public' })
        .then(data => {
            res.render('stories/index',{stories: data})
        })
})

router.get('/add', ensureAuthenticated, (req, res) => {
    res.render('stories/add.ejs')
})

router.post('/add', (req, res) => {
    console.log(req.body);
    let allowComments;
    if (req.body.allowComments) {
        allowComments = true
    } else {
        allowComments = false
    }

    let story = new Story({
        title: req.body.title,
        body: req.body.body,
        status: req.body.status,
        allowComments: allowComments,
        user: req.user.id
    })
    story
        .save()
        .then(data => {
            res.redirect(`/stories/show/${data._id}`)
        })
})

module.exports = router