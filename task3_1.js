const express=require("express");
const app=express();

let user=[];
let order=[];
app.get('/',(req,res)=>{
    console.log('welcome to the shop');
})
app.get('/user',(req,res)=>{
    console.log('GET /user request received')
    res.send("Here is the list of all users")
})
app.post('/user',(req,res)=>{
    console.log('POST /user request received');
    user.push(req.body);
    res.send('A new user has been added.');
})

app.get('/order',(req,res)=>{
    console.log('GET /order request received');
    res.send('Here is the list of all orders')
})
app.post('/order',(req,res)=>{
    console.log('POST /order request received');
    order.push(req.body);
    res.send('A new order has been created');
})

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
})