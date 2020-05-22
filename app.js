require('dotenv').config()
var express = require("express");
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//configuring middlewares
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

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
var router = express.Router();

router.get('/', function(req, res){
    res.json({message : 'here are the apis'});
});
app.use('/topic', router);


//starting the server 
app.listen(3000, () => console.log('Server started'))
module.exports = app