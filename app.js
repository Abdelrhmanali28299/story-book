const express = require('express')
const mongoose = require('mongoose')
const auth = require('./routes/auth')
const passport = require('passport')
const keys = require('./config/keys')
require('./config/passport')(passport)

const app = express()
mongoose.Promise = global.Promise

mongoose
  .connect(keys.mongoURI, { useMongoClient: true })
  .then(() => {
    console.log(`your database connected`)
  })
  .catch(err => {
    console.log(err)
  })


app.get('/', (req, res) => {
  res.send('It Works!')
})

app.use('/auth', auth)

const port = process.env.PORT || 5050

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})