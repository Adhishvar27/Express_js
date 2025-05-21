const express=require('express');
const routers=express.Router();

const productController=require('../controllers/productController');

routers.get('/',productController.getproduct);

routers.get('/:productid',productController.getproductbyid);

routers.post('/',productController.postproduct);

module.exports=routers;