const express=require('express');
const app=express();

app.use(express.json());

const product=require('./routers/products');

app.use('/api/products',product);

app.listen(3000,()=>{
    console.log('server is running');
})