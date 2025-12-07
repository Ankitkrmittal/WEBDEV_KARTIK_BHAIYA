require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const env = require('./env.js')
const PORT =env.PORT;

app.use(express.urlencoded({extended:true}));
let todos=[
    {id:1,task:'coding'},
    {id:2,task:'sleeping'}
]

app.use(express.static(path.join(__dirname,'public')))
app.get('/todos',(req,res)=>{
    res.send(todos);
})


app.get('/todo/:id',(req,res)=>{
    const {id} = req.params;
    const data = todos.filter(todo =>todo.id == +id);
    res.send(data);

})

app.get('/todo-delete/:id',(req,res)=>{
    
    const {id} = req.params;
   
    todos = todos.filter(todo => todo.id != +id)
    res.send(todos)
})
app.post('/todo',(req,res)=>{
    let {task} = req.body;
    let id=todos.length+1;
    todos.push({
        id:id,
        task:task,
    })
    console.log(todos)
    res.redirect('/')
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})