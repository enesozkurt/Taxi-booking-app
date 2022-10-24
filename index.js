const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passengersRouter = require('./routes/passengers')
const driversRouter = require('./routes/driver')
const bookingsRouter = require('./routes/bookings')
const indexRouter = require('./routes/index')
require('./mongo-connection')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.set('view engine', 'pug')

app.use('/passengers', passengersRouter)
app.use('/drivers', driversRouter)
app.use('/bookings', bookingsRouter)
app.use('/', indexRouter)

module.exports = app

