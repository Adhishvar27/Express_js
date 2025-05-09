const express=require('express');
const routers=express.Router();

routers.get('/',(req,res)=>{
    res.send('Order List');
})

routers.post('/',(req,res)=>{
    res.send('New Order');
})

module.exports=routers;