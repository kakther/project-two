// const express = require('express');
// // const router = express.Router();
// const app = express ();

// const Fund = require('../models/fund.js')

// //___________________
// // Routes

// // INDEX
// app.get('/fund', (req, res) => {
//     Fund.find({}, (err, allFund) => {
//         res.render(
//             'index.ejs', {
//                 fund: allFund
            
//         });
//     })
// })
// // NEW 

// app.get('/fund/new', (req, res) => {
//     res.render(
//         'new.ejs',
//         )
// })

// // SHOW
// app.get('/fund/:id', (req, res) => {
//     Fund.findById(req.params.id, (err, foundFund) => {
//         res.render('show.ejs',
//          {
//              fund: foundFund
//          })
//     })
// })


// // GET EDIT
// app.get('/fund/:id/edit', (req, res) => {
//     Fund.findById(req.params.id, (err, foundFund) => {
//         res.render(
//             'edit.ejs',
//             {
//                 edit: foundFund
//             }
//             )
//     })
// })

// // CREATE 
// app.post('/fund', (req, res) => {
//     Fund.create(req.body, (err, createOrganization) => {
// if(err){
//     console.log(err)
// }else{
//     console.log(createOrganization)
// }
//         res.redirect('/fund')
//     })
// })


// // if(err){
// //     console.log(err)
// // }else{
// //     console.log(createOrganization)
// // }
// // UPDATE(PUT)
// app.put('/fund/:id', (req, res) => {
//     // console.log('hello', req.body)
//     Fund.findByIdAndUpdate(req.params.id, req.body, (err, foundFund) => {
//         if(err){
//             console.log(err);
//         }else{
//             console.log(foundProduct)
//         }
//         res.redirect('/fund')
//     })
// })
// // DELETE
// // DONATION
// // // INDEX
// // router.get('/', (req, res) => {
// //     res.render('index.ejs');
// // })
// // // NEW 
// // // SHOW
// // // GET EDIT
// // // CREATE 
// // // UPDATE(PUT)
// // // DELETE
// // // DONATION









// module.exports = router;