///////////////////////////////////
////// DEPENDENCIES
///////////////////////////////////
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const session = require('express-session')


///////////////////////////////////
////// CONFIG
///////////////////////////////////
require('dotenv').config()

const app = express ();
const db = mongoose.connection;

///////////////////////////////////
////// PORT
///////////////////////////////////

const PORT = process.env.PORT || 3003;


///////////////////////////////////
////// MIDDLEWARE
///////////////////////////////////
//use public folder for static assets
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// allow POST, PUT and DELETE from a form
app.use(methodOverride('_method'));


// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false
//   })
// )

///////////////////////////////////
//////// CONTROLLERS 
//////////////////////////////////
const fundController = require('./controllers/fund.js');
app.use(fundController);



// // AUTH 
// const userController = require('./controllers/users_controllers.js');
// app.use('/users', userController);


///////////////////////////////////
//////// DATABASE
//////////////////////////////////
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));



///////////////////////////////////
//////// WELCOME ROUTE
//////////////////////////////////
app.get('/', (req, res) => {
    res.redirect('/fund')
  })
  

///////////////////////////////////
//////// LISTENER
//////////////////////////////////
app.listen(PORT, () => console.log( 'Listening on port:', PORT));