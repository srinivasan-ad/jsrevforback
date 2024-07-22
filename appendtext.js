const fs = require('fs')
const data = "appending data to test.txt :)"
fs.appendFile("test.txt",data,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Appended data to test.txt !");
})