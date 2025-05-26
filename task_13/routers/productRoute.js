const express=require('express');
const routers=express.Router();

const productController=require('../controllers/productController');

routers.get('/',productController.getProduct);

routers.post('/',productController.postProduct);

module.exports=routers;
