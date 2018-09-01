const express = require('express')
const mongoose = require('mongoose')
const auth = require('./routes/auth')
const passport = require('passport')
const session = require('express-session')
const cookieParser = require('cookie-parser')
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

app.get('/', (req, res) => {
  res.send('It Works!')
})

app.use(cookieParser())
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}))

app.use((req, res, next) => {
  res.locals.user = req.user || null
})

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', auth)

const port = process.env.PORT || 5050

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})