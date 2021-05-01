const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');

//CONFIGURATION
require('dotenv').config()
const app = express ();
const db = mongoose.connection;
const Fund = require('./models/fund.js')
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




//___________________
// Routes

// INDEX
app.get('/fund', (req, res) => {
    Fund.find({}, (err, allFund) => {
        res.render(
            'index.ejs', {
                fund: allFund
            
        });
    })
})
// NEW 

app.get('/fund/new', (req, res) => {
    res.render(
        'new.ejs',
        )
})

// SHOW
app.get('/fund/:id', (req, res) => {
    Fund.findById(req.params.id, (err, foundFund) => {
        res.render('show.ejs',
         {
             fund: foundFund
         })
    })
})


// GET EDIT
app.get('/fund/:id/edit', (req, res) => {
    Fund.findById(req.params.id, (err, foundFund) => {
        res.render(
            'edit.ejs',
            {
                edit: foundFund
            }
            )
    })
})

// CREATE 
app.post('/fund', (req, res) => {
    Fund.create(req.body, (err, createOrganization) => {
// if(err){
//     console.log(err)
// }else{
//     console.log(createOrganization)
// }
        res.redirect('/fund')
    })
})

// UPDATE(PUT)
app.put('/fund/:id', (req, res) => {
    // console.log('hello', req.body)
    Fund.findByIdAndUpdate(req.params.id, req.body, (err, foundFund) => {
        // if(err){
        //     console.log(err);
        // }else{
        //     console.log(foundProduct)
        // }
        res.redirect('/fund')
    })
})

// DELETE
app.delete('/fund/:id', (req, res) => {
    Fund.findByIdAndRemove(req.params.id, (err, deleteFund) => {
        res.redirect('/fund')
    })
})

// DONATION
//___________________
//localhost:3000
// app.get('/' , (req, res) => {
//   res.send('Hello World!');
// });


//Listener
app.listen(PORT, () => console.log( 'Listening on port:', PORT));