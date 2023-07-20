const express = require('express');

const router = express.Router();


router
.route('/product')
.get(getProduct)
.post(postProduct)


function getProduct(req,res){
    res.sendFile('C:/Users/Asus/Desktop/backend/dummy/public/product.html');
}

function postProduct(req,res){
    const data = req.body;
    console.log('productData==',data);
    res.json({message: "product added"});
}

module.exports = router;