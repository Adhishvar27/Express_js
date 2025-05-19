const express=require('express');
const routers=express.Router();

const student_List=require('../data/student');

routers.get('/',(req,res)=>{
    const stud_list=student_List.map(user => user.name);
    res.send(`Students : ${stud_list.join(', ')}`);
})

routers.get('/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const user=student_List.find(user=> user.id === id);

    if(user){
        res.send(`Specified User Name : ${user.name}`);
    }
    else{
        res.status(404).send('User Not found');
    }
})

routers.use((req,res)=>{
    res.status(404).send("Page Not Found");
})

module.exports=routers;