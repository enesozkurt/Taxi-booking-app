const express = require('express')
const bodyParser = require('body-parser')
const passengersRouter = require('./routes/passengers')
const indexRouter = require('./routes/index')

const app = express()
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.use('/', indexRouter)
app.use('/passengers', passengersRouter)

app.listen(3000, () => {
    console.log('started listening on 3000')
})

