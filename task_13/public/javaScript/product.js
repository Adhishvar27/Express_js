const onSubmitHandler=(e)=>{
    e.preventDefault();
    const product=e.target.productName.value;

    const obj={
        "productName":product
    }

    axios.post("http://localhost:3000"+"/api/product",obj).then((result)=>{
        console.log("server is connetted");
        console.log("the data entered in the feild is : " + result.data.value.productName);
    })
}