const express=require('express');
const routers=express.Router();

const product=require('../controllers/productController');

routers.get('/',product.getProduct);

module.exports=routers;