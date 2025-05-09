const express=require("express");
const app=express();
// const routers=express.routers();

const userRouters=require('./routers/user')
const orderRouters=require('./routers/orders')

app.use('/user',userRouters);
app.use('/order',orderRouters);

app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
})