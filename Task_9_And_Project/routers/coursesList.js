const express=require('express');
const routers=express.Router();

const coursesList=require('../data/course');

routers.get('/',(req,res)=>{
    const courses=coursesList.map(list=>list.name);
    res.send(`Courses : ${courses.join(', ')}`);
})

routers.get('/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const isPresent=coursesList.find(list=>list.id ===id);

    if(isPresent){
        res.send(`Here's the details About that course : Course Name = > ${isPresent.name} , Description = > ${isPresent.description}`);
    }
    else{
        res.status(404).send(`Course Not found`);
    }
})

module.exports=routers;