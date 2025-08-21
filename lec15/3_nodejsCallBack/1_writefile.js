const {writeFile} = require('node:fs');
const path = require('path');
let fileName = 'names.txt';
let filePath = path.join(__dirname,'data',fileName);
writeFile(filePath,'hello ankit how are you ! whats going on',(err)=>{
    if(err) throw err;
    console.log("file created successfully");
})
