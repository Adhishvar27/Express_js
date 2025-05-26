const userDetails=require('../data/userDetail');
const { AppError } = require('../utils/AppError');
const sendError=require('../utils/errorHandling');

const toGetAllUsers= ()=>{
    if(!userDetails || userDetails.length===0){
        throw new AppError('no User found',404);
    }
    return userDetails.map(user => user.name);
}

const toGetUsersByID=(id) =>{
    
    const userFind=userDetails.find(user => user.id === id);
    if(!userFind){
        throw new AppError(`User with ID ${id} not fount`,404);
    }
    return userFind;
}

module.exports={
    toGetAllUsers,
    toGetUsersByID
}
