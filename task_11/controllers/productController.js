const path=require('path');

const getProduct=(req,res)=>{
    res.sendFile(path.join(__dirname,"..","view","products.html"));
}

module.exports={
    getProduct
};