const express = require('express');

const app = express();

app.listen(4000);
app.use(express.json());

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

let authRouter= express.Router();
let userRouter = express.Router();
let productRouter = express.Router();
app.use('/user',userRouter);
app.use('/auth',authRouter);
app.use('/product',productRouter);

productRouter.route('/')
.get(getProduct)
.post(postProduct)

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

function getProduct(req,res){
    res.sendFile('/public/product.html',{root: __dirname});
}

function postProduct(req,res){
    const data = req.body;
    console.log('productData==',data);
    res.json({message: "product added"});
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