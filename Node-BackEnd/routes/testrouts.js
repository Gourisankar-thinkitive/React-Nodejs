const express = require('express');
const router = require('express').Router();


var bottles = 100;
var bottlePrice = 20;
var bottleSold = 0;

var biscuits = 100;
var biscuitPrice = 10;
var biscuitSold = 0;


router.get('/test',(req,res)=>{
    
    res.json({
        test:'succesfull'
    })
});

app.get('/products', (req, res) => {

    let products = {
        bottle:bottles,
        bottlePrice: bottlePrice,
        bottleSold:bottleSold,
        biscuit: biscuits,
        biscuitPrice: biscuitPrice,
        biscuitSold: biscuitSold

    };
    res.json(products);
});

app.post('/products', (req, res) => {

    console.log(req.body)
    bottles += req.body.bottle;
    biscuits += req.body.biscuit;

    var products = {
        bottle:bottles,
        biscuit: biscuits
    };
    console.log("biscuit add: "+req.body.biscuit+" bottles add: "+ req.body.bottle);
            
    res.json(products);
});

app.put('/products', (req, res) => {

    console.log(req.body)
    bottles = req.body.bottle;
    biscuits = req.body.biscuit;

    var products = {
        bottle:bottles,
        biscuit: biscuits
    };
    console.log("Upadate: biscuit add: "+req.body.biscuit+" bottles add: "+ req.body.bottle);
            
    res.json(products);
});

app.put('/purchase', (req, res) => {

    console.log(req.body)
    bottles = bottles - req.body.bottle;
    biscuits = biscuits - req.body.biscuit;

    biscuitSold +=  req.body.biscuit;
    bottleSold += req.body.bottle;



    var products = {
        bottle:bottles,
        biscuit: biscuits
    };
    console.log("biscuit purchased: "+req.body.biscuit+" bottles purchased: "+ req.body.bottle);
            
    res.json(products);
});

module.exports = router;