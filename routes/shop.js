const express = require('express');

const router  = express.Router();

router.get('/page1',(req,res)=>{
    res.send('<h1>Shopping page 1</h1>');
})

module.exports = router;