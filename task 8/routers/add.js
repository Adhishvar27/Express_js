const express=require("express");
const routers=express.Router();

const books=require('../data/books');

routers.get('/',(req,res)=>{
    console.log('Requested to list the books');
    res.json({message:'Here is the list of books!', books});
})

routers.post('/',(req,res)=>{
    const toAddBook=req.body.book;
    if(toAddBook){
    books.push(toAddBook);
    console.log('POST request is made and the data added is \n',toAddBook);
    res.send('Book has been added');
    }
    else{
        res.status(404).send('enter the book name');
    }
})

module.exports=routers;