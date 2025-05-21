const express=require('express');
const routers=express.Router();

const productDetail=require('../data/ProductDetail');

routers.get('/',(req,res)=>{
    const productList=productDetail.map(list => list.name);
    res.send(`Here is the list of products : \n${productList.join(', \n')}`);
})

routers.get('/:productid',(req,res)=>{
    const id=parseInt(req.params.productid);
    const product=productDetail.find(prod => prod.id === id)
    if(product){
         res.send(`Here is the specified product details : ${product.name}`);
    }
    else{
        res.status(404).send('Enter the valid product code');
    }
})

routers.post('/',(req,res)=>{
    const newProduct=req.body;
    productDetail.push(newProduct);
    if(newProduct){
        res.send(`A new product has been added. \n id = ${newProduct.id} name = ${newProduct.name}`);
    }
    else{
        res.status(404).json('Enter the value in tha body.')
    }
})

module.exports=routers;