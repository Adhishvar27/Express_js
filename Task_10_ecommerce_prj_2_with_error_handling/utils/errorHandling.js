const sendErrorResponse=(res,statusCode,err)=>{
    res.status(statusCode).json({
        success:false,
        message:err.message || err
    });
}

const handleAsyncErrors=(fn)=>{
    return (req,res,next)=>{
        Promise.resolve(fn(req,res,next)).catch(next)
    };
}

module.exports={
    sendErrorResponse,
    handleAsyncErrors
}