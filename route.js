const express = require('express');

const app = express();


app.get('/contact',(req,res)=>{
    res.send("<h1>This is Contact Page</h1>")
});

app.get('/about',(req,res)=>{
    res.send("<h1>This is About us page</h1>")
});

app.get('/',(req,res)=>{
    res.send("<h1>This is NodeJS Application</h1>")
})

app.get('*',(req,res)=>{
    res.send("<h1>404 Error</h1>")
})




app.listen(8888,()=>{
    console.log("Server is Running")
})
