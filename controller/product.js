exports.getProduct=(req,res)=> {
    res.sendFile('C:/Users/Asus/Desktop/backend/dummy/views/add-product.html');
}

exports.postProduct=(req,res)=>{
    const data = req.body;
    console.log('productData==',data);
    res.json({message: "product added"});
}

exports.getShopItem=(req,res)=>{
    res.sendFile('C:/Users/Asus/Desktop/backend/dummy/views/shop.html')
   
}

