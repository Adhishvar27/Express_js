const express=require("express");
const app=express();

app.use(express.json());

let products=["book","shoe","mouse"];
let categories=["toys","books","beds"];

app.use((req,res,next)=>{
    console.log(`${req.method} Request is made from ${req.url}`);
    next();
})

app.get('/',(req,res)=>{
    res.send('welcome');
})

app.get('/products',(req,res)=>{
    res.send(`the ${req.method} method executed in ${req.url}`);
})
app.post('/products',(req,res)=>{
    const {name}=req.body;
    products.push(name.trim());
    res.status(201).json(products);
})

app.get('/category',(req,res)=>{
    res.send(`the ${req.method} method is executed in ${req.url}`);
})
app.post('/category',(req,res)=>{
    const {name}=req.body;
    categories.push(name.trim());
    res.status(201).json(categories);
})

app.use((req,res)=>{
    res.status(404).send(`404 - Page Not Found`);
})

app.listen(4000,()=>{
    console.log('server is running in http://localhost:4000');
})