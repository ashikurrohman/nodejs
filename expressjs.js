const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.send("<h1>This is NodeJS Application</h1>")
})


app.listen(8888,()=>{
    console.log("Server is Running")
})
