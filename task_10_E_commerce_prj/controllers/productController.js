const productDetail=require('../data/ProductDetail');

const getproduct=(req,res)=>{
    const productList=productDetail.map(list => list.name);
    res.send(`Here is the list of products : \n${productList.join(', \n')}`);
};

const getproductbyid=(req,res)=>{
    const id=parseInt(req.params.productid);
    const product=productDetail.find(prod => prod.id === id)
    if(product){
         res.send(`Here is the specified product details : ${product.name}`);
    }
    else{
        res.status(404).send('Enter the valid product code');
    }
};

const postproduct=(req,res)=>{
    const newProduct=req.body;
    productDetail.push(newProduct);
    if(newProduct){
        res.send(`A new product has been added. \n id = ${newProduct.id} name = ${newProduct.name}`);
    }
    else{
        res.status(404).json('Enter the value in tha body.')
    }
};

module.exports={
    getproduct,
    getproductbyid,
    postproduct
}