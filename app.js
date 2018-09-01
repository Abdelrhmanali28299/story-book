const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const ejs = require('ejs')
const auth = require('./routes/auth')
const index = require('./routes/index')
const keys = require('./config/keys')
const User = require('./models/User')
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

app.set('view engine', 'ejs')

app.use(cookieParser())
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/', index)
app.use('/auth', auth)

const port = process.env.PORT || 5050

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})