const {unlink} = require('node:fs');
const path = require('path');
let fileName = 'names.txt';
let filePath = path.join(__dirname,'data',fileName);
unlink(filePath,(err)=>{
    if(err) throw err;
    console.log("file delted successfully");
})
