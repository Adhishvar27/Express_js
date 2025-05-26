const express=require('express');
const routers=express.Router();

const userController=require('../controllers/usersController');

routers.get('/',userController.getUser);

routers.get('/:id',userController.getUserId);

routers.post('/',userController.postUser);

module.exports=routers;