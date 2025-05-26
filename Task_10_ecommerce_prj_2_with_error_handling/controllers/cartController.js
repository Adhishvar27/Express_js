const cartDetail=require('../data/cartDetail');
const userDetail=require('../data/userDetail');
const productDetail=require('../data/ProductDetail');
const AppError = require('../utils/AppError');
const { handleAsyncErrors } = require('../utils/errorHandling');

const getCart=handleAsyncErrors(async(req,res,next)=>{
    const userId=parseInt(req.params.userid);
    if(!userDetail.find(user=>user.id===userId)){
        throw new AppError(`User not found`,404);
    }
    const cartlist=cartDetail[userId] || [];
    res.send(`Here's the details of the specified user's cart list (user Id : ${userId}) : ${cartlist.join(', ') || 'cart is empty'} `);
});

const postCart=(req,res)=>{
    const userId=parseInt(req.params.userid);
    const productId = req.body.productId;
    if(!userDetail.find(user => user.id===userId)){
        throw new AppError(`user not found`,404);
    }
     if (!productId || !productDetail.some(prod => prod.id === productId)) {
        throw new AppError('Invalid product ID', 400);
    }
    cartDetail[userId] = cartDetail[userId] || [];
    cartDetail[userId].push(productId);
    res.send(`product Id ${productId} has been added to the ${userId}th user cart.`); 
};

module.exports={
    getCart,
    postCart
}