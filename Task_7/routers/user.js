const express=require('express');
const routers=express.Router()

routers.get('/',(req,res)=>{
    res.send('user List');
})

routers.post('/',(req,res)=>{
    res.send('New User');
})

module.exports=routers;