const productDetail=require('../data/ProductDetail');
const AppError = require('../utils/AppError');
const { handleAsyncErrors } = require('../utils/errorHandling');


const getproduct=handleAsyncErrors(async(req,res,next)=>{
    if(!productDetail.length){
        throw new AppError(`No products Avaialbe`,404);
    }
    const productList=productDetail.map(list => list.name);
    res.send(`Here is the list of products : \n${productList.join(', \n')}`);
});

const getproductbyid=handleAsyncErrors(async(req,res,next)=>{
    const id=parseInt(req.params.productid);
    const product=productDetail.find(prod => prod.id === id)
    if(!product){
         throw new AppError(`product ID ${id} not found`,404);
    }
   res.send(`product details : ${product.name}`);
});

const postproduct=handleAsyncErrors(async(req,res,next)=>{
    const newProduct=req.body;
    if(!newProduct?.id || !newProduct?.name){
        throw new AppError(`Provide both id and name`,404);    
    }

    if (productDetail.some(prod => prod.id === newProduct.id)) {
        throw new AppError(`Product ID ${newProduct.id} exists`, 400);
    }

    productDetail.push(newProduct);
    res.send(`A new product has been added. \n id = ${newProduct.id} name = ${newProduct.name}`);
});

module.exports={
    getproduct,
    getproductbyid,
    postproduct
}