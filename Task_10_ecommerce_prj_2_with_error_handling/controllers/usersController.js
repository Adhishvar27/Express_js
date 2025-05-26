const userDetails=require('../data/userDetail');
const userServices=require('../services/userServices');
const AppError=require('../utils/AppError');
const {handleAsyncErrors}=require('../utils/errorHandling');

const getUser=handleAsyncErrors(async(req,res,next)=>{
    const userList=userServices.toGetAllUsers();
    res.send(`Here is the list of user : ${userList.join(', ')}`);
});

const getUserId=handleAsyncErrors(async(req,res)=>{
    let userFind=userServices.toGetUsersByID(parseInt(req.params.id))
    res.send(`Fetching the user by id : ${userFind.name}`);
});

const postUser=handleAsyncErrors(async(req,res)=>{
    const newUser=req.body;
    if(!newUser?.id || !newUser?.name){
        throw new AppError(`please provide both id and name`,400);
    }
    if(userDetails.some(user => user.id===newUser.id)){
        throw new AppError(`the user ID is already existed in list`,400);
    }

    userDetails.push(newUser);
    res.send(`New user added - id: ${newUser.id}, name: ${newUser.name}`);    
});

module.exports={
    getUser,
    getUserId,
    postUser
}