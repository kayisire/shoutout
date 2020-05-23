require('dotenv').config()
const express = require("express")
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// configuring middlewares
// app.use(bodyParser.urlencoded({ extended: true}))
// app.use(bodyParser.json());
app.use(express.json())

//connecting to database
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(mongooseResp => {
    console.log('Successfully connected to the database')
}).catch(err => {
    console.log('Could not connect to the database.', err)
})

//ROUTES
let topicRoutes = require('./routes/topicroute')
app.use('/topic', topicRoutes)

//starting the server 
app.listen(3000, () => console.log('Server started'))