const express=require('express');
const app=express();

app.use(express.json());

const products=require('./routers/products');

app.use('/api/products',products);

app.listen(3000,()=>{
    console.log('Server is running');
})