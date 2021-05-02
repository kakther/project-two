const express = require('express');
const mongoose = require ('mongoose');
const methodOverride  = require('method-override');
const app = express ();





//CONFIGURATION
require('dotenv').config()
const db = mongoose.connection;
const fundController = require('./controllers/fund.js');
app.use(fundController);
const PORT = process.env.PORT || 3003;


// DATABASE
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI , 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false 
    }
);

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));


//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));


//use public folder for static assets
app.use(express.static('public'));






//Listener
app.listen(PORT, () => console.log( 'Listening on port:', PORT));