const express = require('express');
const router= express.Router();
const {accounts, writeJSON} = require('../data.js');

router.get('/payment', (req, res)=> res.render('payment', {account: accounts.credit}));
router.post('/payment', (req, res)=>{
    accounts.credit.balance -= req.body.amount;
    accounts.credit.available += parseInt(req.body.amount);
    writeJSON();
    res.render('payment', {message: 'Payment Successful', account: accounts.credit});
});


router.get('/transfer', (req, res)=>res.render('transfer'));
router.post('/transfer', (req, res)=>{
    const {from, to, amount} = req.body;
    accounts[from].balance -= amount; 
    accounts[to].balance += parseInt(amount, 10);
    writeJSON();
    res.render('transfer', {message: 'Transfer Completed'});
});

module.exports = router;