const fs = require('fs');


fs.readFile('file.json',(err,data)=>{
    if(err){
        console.log("Please solve your Error");
    }
    let file = JSON.parse(data);
    console.log(file.name) 
});
