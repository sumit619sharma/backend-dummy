exports.getContact=(req,res)=>{
    res.sendFile('C:/Users/Asus/Desktop/backend/dummy/views/contactus.html');
}

exports.postContact=(req,res)=>{
    // const data = req.body;
    console.log('post rcontact request success');
   res.redirect('/success');
}