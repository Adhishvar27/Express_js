const express=require('express');
const app=express();
//const AppError = require('./utils/AppError');
const { sendErrorResponse } = require('./utils/errorHandling');

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

// app.all((req, res, next) => {
//     next(new AppError(`Route ${req.originalUrl} not found`, 404));
// });

app.use((err, req, res, next) => {
    console.error(err.stack);
    err.statusCode = err.statusCode || 500;
    sendErrorResponse(res, err.statusCode, err.message);
});

app.listen(3000,()=>{
    console.log('Server is Starting');
})