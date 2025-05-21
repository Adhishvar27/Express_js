const userDetails=require('../data/userDetail');

const getUser=(req,res)=>{
    const userList=userDetails.map(user => user.name);
    res.send(`Here is the list of user : ${userList.join(', ')}`);
}

const getUserId=(req,res)=>{
    const id=parseInt(req.params.id);
    const userFind=userDetails.find(user => user.id === id);
    if(userFind){
        res.send(`Fetching the user by id : ${userFind.name}`);
    }
}

const postUser=(req,res)=>{
    const newUser=req.body;
    if(newUser){
        userDetails.push(newUser);
        res.send(`A new user has been added \n id = ${newUser.id} name=${newUser.name}`);
    }
    else{
        res.status(404).json('enter the details');
    }
    
}

module.exports={
    getUser,
    getUserId,
    postUser
}