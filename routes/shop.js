const express = require('express');

const router  = express.Router();

router.get('/',(req,res)=>{
     res.sendFile('C:/Users/Asus/Desktop/backend/dummy/views/shop.html')
    
})

module.exports = router;