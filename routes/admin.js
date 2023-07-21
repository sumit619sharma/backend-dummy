const express = require('express');

const router = express.Router();
const {getProduct,postProduct} = require('../controller/product.js')
const {getContact,postContact} = require('../controller/contact.js')

router
.route('/product')
.get(getProduct)
.post(postProduct)

router
.route('/contact')
.get(getContact)
.post(postContact)




module.exports = router;