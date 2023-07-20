const express = require('express');
const fs = require('fs');
const app = express();

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
app.listen(4000);
app.use(express.json());



let authRouter= express.Router();
let userRouter = express.Router();
let productRouter = require('./routes/admin.js');
let shopRouter = require('./routes/shop.js');
app.use('/user',userRouter);
app.use('/auth',authRouter);
app.use('/admin',productRouter);
app.use('/shop',shopRouter);
app.get('/login',(req,res)=>{
    res.sendFile('C:/Users/Asus/Desktop/backend/dummy/login.html')
});

app.post('/login',(req,res)=>{
const text = req.body.username;
localStorage.setItem('username',text);
res.redirect('/');
})

app.get('/getdata',(req,res)=>{
    fs.readFile('chatData.txt','utf8',(err,data)=>{
        if(err){
      console.log('error while reading data==',err);
        }else{
            res.send(data);
        }
    })
})

app.post('/',(req,res)=>{
    let msg = req.body.message;
    let user = localStorage.getItem('username');
    let text =`${user}: ${msg}`
     if(msg){
        let path = 'C:/Users/Asus/Desktop/backend/dummy/chatData.txt'
        fs.appendFile(path,text,(err)=>{
            if(err){
           console.log("error===",err);
            }else{
                console.log("data appended");
                res.send("message posted successfully");
            }
        })
     }
})

app.get('/',(req,res)=>{
    res.sendFile('C:/Users/Asus/Desktop/backend/dummy/chat.html')
})



app.use((req,res)=>{
    
    res.status(404).sendFile('./404.html',{root:__dirname})
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
   
    res.sendFile('/public/index.html',{root:__dirname});
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