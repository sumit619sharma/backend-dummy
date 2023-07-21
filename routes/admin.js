const express = require('express');

const router = express.Router();


router
.route('/product')
.get(getProduct)
.post(postProduct)

router
.route('/contact')
.get(getContact)
.post(postContact)


function getProduct(req,res){
    res.sendFile('C:/Users/Asus/Desktop/backend/dummy/views/add-product.html');
}

function postProduct(req,res){
    const data = req.body;
    console.log('productData==',data);
    res.json({message: "product added"});
}

function getContact(req,res){
    res.sendFile('C:/Users/Asus/Desktop/backend/dummy/views/contactus.html');
}

function postContact(req,res){
    // const data = req.body;
    console.log('post rcontact request success');
   res.redirect('/success');
}

module.exports = router;