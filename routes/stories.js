const express = require('express');
const {ensureAuthenticated} = require('../helpers/auth');
const Story = require('../models/Story');
const User = require('../models/User');

const router = express.Router()

router.get('/', (req, res) => {
    res.render('stories/index')
})

router.get('/add', ensureAuthenticated, (req, res) => {
    res.render('stories/add.ejs')
})

router.post('/add', (req, res) => {
    let allowComments
    if(req.body.allowComments) {
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