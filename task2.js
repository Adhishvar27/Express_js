const express=require("express");
const app=express();
const middleWare=((req,res,next)=>{
    req.user="guest";
    next();
})

app.get('/welcome',middleWare,(req,res)=>{
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
})
app.listen(3200,()=>{
    console.log("server is running");
})