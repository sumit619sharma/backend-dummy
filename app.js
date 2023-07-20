const express = require('express');

const app = express();

//app.listen(4000);

app.get('/',(req,res)=>{
    console.log("exprss====");
  res.sendFile('./index.html',{root:__dirname});
})

app.get('/about',(req,res)=>{
    res.sendFile('./about.html',{root:__dirname});
  })


  //404 page
  app.use((req,res)=>{
    
    res.status(404).sendFile('./404.html',{root:__dirname})
  })