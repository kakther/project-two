const express = require('express');
const router = express.Router();
const Fund = require('../models/fund.js');




// INDEX
router.get('/fund', (req, res) => {
    Fund.find({}, (err, allFund) => {
        res.render(
            'index.ejs', {
                fund: allFund
            
        });
    })
})
// NEW 

router.get('/fund/new', (req, res) => {
    res.render(
        'new.ejs',
        )
})

// SHOW
router.get('/fund/:id', (req, res) => {
    Fund.findById(req.params.id, (err, foundFund) => {
        res.render('show.ejs',
         {
             fund: foundFund
         })
    })
})


// GET EDIT
router.get('/fund/:id/edit', (req, res) => {
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
router.post('/fund', (req, res) => {
    Fund.create(req.body, (err, createOrganization) => {
if(err){
    console.log(err)
}else{
    console.log(createOrganization)
}
        res.redirect('/fund')
    })
})

// UPDATE(PUT)
router.put('/fund/:id', (req, res) => {
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
router.delete('/fund/:id', (req, res) => {
    Fund.findByIdAndRemove(req.params.id, (err, deleteFund) => {
        res.redirect('/fund')
    })
})

// DONATION
router.put('/fund/donate/:id', (req, res) => {
    Fund.findBy(req.params.id, (err, donateFund) => {
        res.redirect('/fund')
    })
})

// INFO
router.put('/fund/info/:id', (req, res) => {
    Fund.findBy(req.params.id, (err, infoFund) => {
        res.render('/fund/show')

    })
})





module.exports = router;