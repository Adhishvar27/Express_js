const express=require('express');
const app=express();

app.use(express.static('public'));
app.use(express.json());

const productrouter=require('./routers/productRoute');

app.use('/api/product',productrouter);

app.listen(3000,()=>{
    console.log('Server is running');
})