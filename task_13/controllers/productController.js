const path=require('path');

const getProduct=(req,res)=>{
    res.sendFile(path.join(__dirname,"..","view","productHTML.html"));
}

const postProduct=(req,res)=>{
    const data=req.body;
    console.log(data);
    res.json({
        "value": data
    });
}

module.exports={
    getProduct,
    postProduct
}
