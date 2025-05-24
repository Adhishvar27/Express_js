const { get } = require('http');
const path=require('path');

const getProduct=(req,res)=>{
    res.sendFile(path.join(__dirname,"..","view","productForm.html"));
}

module.exports={
    getProduct
};