const express=require("express");
const app=express();

app.use(express.json());

const addBooks=require('./routers/add');

app.use('/books',addBooks);

app.listen(3000,()=>{
    console.log("server is running");
})