const express=require("express");
const routers=express.Router();

const cartController=require('../controllers/cartController');

routers.get('/:userid',cartController.getCart);

routers.post('/:userid',cartController.postCart);

module.exports=routers;