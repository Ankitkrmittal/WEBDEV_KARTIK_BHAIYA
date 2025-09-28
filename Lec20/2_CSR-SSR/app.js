const express = require('express');
const app = express();
const PORT = 4444;


app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.render('index',{
        title:"My Todo App",
        arr:[1,2,3,4,5,6]
    });
})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})