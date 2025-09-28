const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname,'static')));

app.listen(4444,()=>{
    console.log("http://localhost:4444");
})

