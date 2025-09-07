const express = require('express');
const app = express();
//jo hum html ka code run krte aye h wo live server ke through run krte h 
//dusara 
const path = require('path')
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
})

app.get('/file.js',(req,res)=>{
    res.sendFile(path.join(__dirname,'/file.js'))
})
app.get('/style.css',(req,res)=>{
    res.sendFile(path.join(__dirname,'/style.css'))
})

app.listen(4444,()=>{
    console.log("http://localhost:4444");

})



//homework

//write blogs for
//how to start express server
//get request get query params usage
//get and post diffference

//serving static file using express


