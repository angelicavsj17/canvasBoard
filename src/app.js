const express = require('express')
const morgan = require('morgan')
const taksRouter = require('./routes/taks')
const app =express()

app.use(morgan('dev'))

//app.use(require('./routes/index'))


module.exports = app 