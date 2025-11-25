const express = require('express');
const path = require('path');
const token = require('jsonwebtoken');
const app = express();
const JWT_SECRET = 'fhubisvjbn';
app.use(express.urlencoded({extended:true}));

app.get('/login',(req,res)=>{
    let token = req.cookies.token
})