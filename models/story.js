const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storySchema = new Schema({
    titel: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'public'
    },
    allowComments: {
        type: Boolean,
        default: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const modelClass = mongoose.model('stories', storySchema, 'stories')

module.exports = modelClass