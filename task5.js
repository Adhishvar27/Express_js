const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    res.send('<h1>welcome</h1>');
})

app.get('/username/:name',(req,res)=>{
    const name=req.params.name;
    const dept=req.query.dept;
    res.send(`<h2>Hello ${name} from ${dept} Department</h2>`);
})

app.get('/list/:category/:product',(req,res)=>{
    const {category,product}=req.params;
    const {sort,limit}=req.query;

    let response=`<h2>its the product "${product}" from "${category}" category`;
    if(sort){response+=`, sorted by ${sort}`;}
    if(limit){response+=`, limited by ${limit}</h2>`;}

    res.send(response);
})
app.get('/about',(req,res)=>{
    res.send(`<h2>About Us</h2>`)
})
app.listen(4000,()=>{
    console.log('server is running on http://localhost:4000');
})