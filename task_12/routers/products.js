const express=require('express');
const routers=express.Router();

const prodController=require('../controllers/productController');

routers.get('/',prodController.getProduct);

module.exports=routers;