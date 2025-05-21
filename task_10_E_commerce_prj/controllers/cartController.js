const cartDetail=require('../data/cartDetail');
const userDetail=require('../data/userDetail');
const productDetail=require('../data/ProductDetail');

const getCart=(req,res)=>{
    const userId=parseInt(req.params.userid);
    const isuser=userDetail.find(user=>user.id===userId)
    if(!isuser){
        return res.status(404).send('User not found');
    }
    const cartlist=cartDetail[userId] || [];
    res.send(`Here's the details of the specified user's cart list (user Id : ${userId}) : ${cartlist.join(', ') || 'cart is empty'} `);
};

const postCart=(req,res)=>{
    const userId=parseInt(req.params.userid);
    const inuser=userDetail.find(user => user.id===userId);
    if(!inuser){
        return res.status(404).send('User Not found');
    }
    const productId=req.body.productId;
    const isproduct=productDetail.find(prod=>prod.id===productId);
    if(!productId || typeof productId !=='number' || !isproduct){
        return res.status(404).send('Enter the Product ID or vaild ID');
    }
    if(!cartDetail[userId]){
        cartDetail[userId]=[];
    }
    cartDetail[userId].push(productId);
    res.send(`product Id ${productId} has been added to the ${userId}th user cart.`); 
};

module.exports={
    getCart,
    postCart
}