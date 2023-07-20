//server creation

//1. http module

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log("request has send to server");
    console.log("req object==",req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
     
    let path='';
    switch(req.url){
        
        case '/':
            path='./index.html'
            break;
            case '/about':
                path='./about.html'
                break;
                default :
                path='./404.html'
                break
    }
    fs.readFile(path,(err, fileData)=>{
        if(err){
   console.log(err);
        }else{
  res.write(fileData);
  res.end();
        }
    })
      
})

// // server.listen(4000,'localHost',()=>{
// //     console.log('server is listning to port 3000');
// });