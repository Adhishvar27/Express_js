
const express=require("express");
const app=express();

app.use(express.json());

let products=["book","shoe","mouse"];
let categories=["toys","books","beds"];

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to the store</h1>`);
})
app.get('/products',(req,res)=>{
    console.log('GET /products is executed');
    const listProducts=products.map(p=> JSON.stringify(p)).join('<br>');
    res.send(`<h1>Here is the list of all products:</h1><br>
        <h2>${listProducts}</h2>`);
})
app.post('/products',(req,res)=>{
    console.log('POST /products is executed');
    const { name } = req.body;

    if (typeof name !== 'string' || !name.trim()) {
        return res.status(400).send('Invalid product name');
    }

    products.push(name.trim());
    res.status(201).json({ message: 'Product added', products });
})

app.get('/categories',(req,res)=>{
    console.log('GET /categories is executed');
    const listCategories=categories.map(c=>JSON.stringify(c)).join('<br>');
    res.send(`
        <h1>Here is the list of all categories:</h1>
        <h2>${listCategories}</h2>
        `)
})
app.post('/categories',(req,res)=>{
    console.log('POST /categories is executed');
    const {name}=req.body;
    categories.push(name.trim());
    res.status(201).json({message: 'Product added',categories});
})

app.use((req,res)=>{
    res.status(404).send(`<h1>404 - Page Not Found</h1>`);
})

app.listen(4000,()=>{
    console.log("Server is runninng successfully on http://localhost:4000");
})