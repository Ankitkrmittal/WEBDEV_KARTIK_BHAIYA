const express = require('express');
const app = express();
const path = require('path');
const knowweather = require('./routes/routes.weather'); 
app.use(express.urlencoded({extended:true}));
app.use('/api',knowweather)

app.listen(4444,()=>{
    console.log(`http://localhost:4444`);
})