const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))

let users=[
    {
        name: "sumit",
        age: 23,
        id: 1
    },
    {
        name: "aniket",
        age: 23,
        id: 2
    },
    {
        name: "seena",
        age: 21,
        id: 3
    }
];

app.listen(5000);
//app.use(express.json());



let authRouter= express.Router();
let userRouter = express.Router();
let productRouter = require('./routes/admin.js');
let shopRouter = require('./routes/shop.js');
const { extend } = require('lodash');

app.use('/user',userRouter);
 app.use('/auth',authRouter);
app.use('/admin',productRouter);
app.use('/shop',shopRouter);
app.get('/login',(req,res)=>{
    res.send(`<form action="/login" method="POST" onSubmit="localStorage.setItem('username',document.getElementById('user').value )" >
    <input id="user" type="text" name="username">
    <button type="submit">login</button> `)
});

app.post('/login',(req,res)=>{
const text = req.body.username;
console.log("point to post of login",text)
username=text;
res.redirect('/');

})

app.get('/success', (req,res)=>{
    res.send("form successfully filled");
})



app.post('/',(req,res)=>{
    let msg = req.body.message;
    let id = req.body.user;
   console.log('mesaage==',req.body);
   console.log("user==",id);
    let text =`${id}: ${msg}`
     if(msg){
         
        fs.appendFile('chatData.txt',text+'\n',(err)=>{
            if(err){
           console.log("error===",err);
            }else{
                console.log("data appended");
                //res.send("message posted successfully");
                res.redirect('/');
            }
        })
     }
     
})

app.get('/',(req,res)=>{
    console.log("in send path");
    //res.sendFile('./chat.html',{root:__dirname})
   fs.readFile('chatData.txt',(err,data)=>{
    if(err){
        data="no chat Exist";
    }
    
   res.send(`${data}  <form action="/" method="POST" onSubmit="document.getElementById('hide').value = localStorage.getItem('username')" >
   <label for="message">Send Message:</label> <input type="text" id="message" name="message" required><input type='hidden' id="hide"  name="user" >
   <button id="btn">send</button></form>`)
   })
})



app.use((req,res)=>{
    
    res.status(404).sendFile('C:/Users/Asus/Desktop/backend/dummy/views/404.html')
  })

authRouter
.route('/signup')
.get(getSignup)
.post(postSignup)


userRouter
.route('/')
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)

userRouter
.route('/:id')
.get(getUserById)

function getUser(req,res){
    console.log("queries==",req.query);
    console.log('get reuqest to user');
    res.send("query received");  
}
function postUser(req,res){
    users=req.body;
    res.json({message: "user posted successfully",
                 users: req.body });
  }

 function updateUser(req,res){
    users={...users, ...req.body}
    res.json({message: "udpated user successfully",
           users: users});
    
}
function deleteUser(req,res){
    users={};
    res.json({message: 'deleted successfully'})
}

function getUserById(req,res){
    console.log("params==", req.params);
    const id = req.params.id;
    const passUser = users.filter((obj)=> obj.id===id )
    res.send(passUser);
}

  function getSignup(req,res){
   console.log('get sign get called==',req.url)
    res.sendFile('/authent/index.html',{root:__dirname});
}
function postSignup(req,res){
    let data = req.body;
    console.log("data",data);
    res.json({message: 'user signed up',
          signDetail: data});
}


// app.get('/user',(req,res)=>{
//     res.send(users);
// })

// app.get('/user',(req,res)=>{
//     console.log("queries==",req.query);
//     console.log('get reuqest to user');
//     res.send("query received");  
// })

// app.post('/user',(req,res)=>{
//   users=req.body;
//   res.json({message: "user posted successfully",
//                users: req.body });
// })

// app.patch('/user',(req,res)=>{
//     users={...users, ...req.body}
//     res.json({message: "udpated user successfully",
//            users: users});
    
// })



// app.delete('/user',(req,res)=>{
//     users={};
//     res.json({message: 'deleted successfully'})
// })


// // params
// app.get('/user/:id/:name',(req,res)=>{
//     console.log("params==", req.params);
//     res.send("params received");
// })