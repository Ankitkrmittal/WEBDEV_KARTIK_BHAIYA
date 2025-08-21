const {readFile} = require('node:fs/promises');
const path = require('path');
let fileName = 'names.txt';
let joinpath = path.join(__dirname,'data',fileName);
readFile(joinpath,{
    encoding:'utf-8'
})
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
