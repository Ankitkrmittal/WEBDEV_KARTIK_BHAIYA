const {writeFile} = require('node:fs/promises');

const path = require('path');
fileName = 'names.txt';
let filePath = path.join(__dirname,'data',fileName);
writeFile(filePath,"Ankit",{
     encoding:'utf-8',
     flag :'w'
})
    .then(()=>{
        console.log("file write successfully");
    })
    .catch(err=>{
        console.log(err);
    })
