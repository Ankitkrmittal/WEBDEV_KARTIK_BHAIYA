const {unlink}= require('node:fs/promises');
const path = require('path');
let fileName = 'names.txt';
let filePath = path.join(__dirname,'data',fileName);
unlink(filePath)
 .then(()=>{
    console.log("file delted successfully");

 })
  .catch((err)=>{
    console.log(err);
  })
