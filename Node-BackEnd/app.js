const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const test = require('./routes/testrouts');


const app = express();

app.use(cors());
app.use(parser.json())
app.use(parser.urlencoded({ extended:true }));
app.use('/', test);




app.get('/', (req, res) => {

    let products = {
        bottle:0,
        bottlePrice: 0,
        biscuit: 0,
        biscuitPrice: 0
    };
    res.json(products);
});



app.listen(9090, ()=>{
    console.log("Server started at 9090..");
});