const {readFile} = require('node:fs');

const path = require('path');
let fileName = 'names.txt';
let filePath = path.join(__dirname,'data',fileName);
readFile(filePath,{
     encoding:'utf-8'
},(err,data)=>{
    if(err) throw err;
    console.log(data);
})
    