const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;
const cookie = require('cookie');
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/signup',(req,res)=>{
    res.setHeader(
        "Set-Cookie",
        cookie.stringifySetCookie({
          name: "name",
          value: "ankit",
          //httpOnly: true, 
          maxAge: 60 * 60 * 24 * 7, // 1 week
        }),
      );
})
app.get('/login',(req,res)=>{
    res.send('you need to login before you access website');
})

app.get('/website',(req,res)=>{
    if(!req.cookies.name) {
        return res.redirect('/login');
    }
    res.send(`hello welcome to the website : ${req.cookies.name}`);
})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})
