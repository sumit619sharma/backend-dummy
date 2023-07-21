exports.get404Page=(req,res)=>{
    
    res.status(404).sendFile('C:/Users/Asus/Desktop/backend/dummy/views/404.html')
  }