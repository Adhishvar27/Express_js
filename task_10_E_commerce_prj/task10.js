const express=require('express');
const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send(`<center><h2>Welcome to the shopping center</h2></center>`);
})

const users=require('./routers/userRouter');
const product=require('./routers/productRouter');
const cart=require('./routers/cartRouter');

app.use('/users',users);
app.use('/products',product);
app.use('/cart',cart);

app.listen(3000,()=>{
    console.log('Server is Starting');
})