const express=require("express");
const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send(`<h2>Welcome to the Student & Course Portal API!</h2>`);
})

const student= require('./routers/studentList');
const course=require('./routers/coursesList');

app.use('/student',student);
app.use('/course',course);

app.listen(3000,()=>{
    console.log('Server is running');
})