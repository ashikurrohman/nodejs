const { constants } = require('crypto');
const fs = require('fs');

var details = {
    name : "Ashikur Rohman",
    age : 24,
    roll: 111,
    subject :{
        first: 'Economics',
        second : 'Farsi',
        third : 'Math'
    }
}

var myobj = JSON.stringify(details);
fs.writeFile('test.json',myobj,(err)=>{
 if(err){
     console.log("ERROR GOT")
 }else{
     console.log("File Got it")
 }
});
