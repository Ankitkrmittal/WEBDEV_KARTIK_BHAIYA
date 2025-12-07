const path = require('path');
const express = require('express');
const PORT = 4444;
const app = espress();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/todos',(req,res)=>{
    res.send(todos);
})

app.post('/todos',(req,res)=>{
    const {name,description} = req.body;
    let todos
})