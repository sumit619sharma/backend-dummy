const express = require('express');

const router  = express.Router();
const {getShopItem} = require('../controller/product.js')
router.get('/',getShopItem)

module.exports = router;
