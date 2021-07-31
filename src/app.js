const express = require('express')
const cors = require('cors')
const morgan =require('morgan')

const taksRouter =  require('./routes/taks.router')
const authRouter = require('./routes/auth.router')

const app = express()

//sttings
app.set('port',process.env.PORT || 4000)

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

//routes
app.get('/', (req, res) => {
res.json("welcome app taks")
})

app.use('/api/auth', authRouter)
app.use('/api/taks', taksRouter)

module.exports = app