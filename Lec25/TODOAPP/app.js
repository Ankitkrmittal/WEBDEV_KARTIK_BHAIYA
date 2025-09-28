const express = require('express');
const path = require('path');
const app = express();
const Todos = require('./Todos');
const mongoose = require('mongoose');
const PORT = 4444;
app.set('view engine','hbs');
app.use(express.static(path.join(__dirname,'static')));
app.use(express.urlencoded({extended:true}));
let url ='mongodb+srv://akm787614:ankit@cluster0.h3fbeny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
app.get('/',async(req,res)=>{
    try{
        let todos = await Todos.getTodos();
        console.log(todos);
        res.render('index',{todos})
    } catch(error){
        console.log(error);
        res.render('error',{
            error
        })
    }
})
app.get('/todos/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        let data= await Todos.getTodo(id);
        console.log(data);
        res.render('index',{data});
    } catch(error){
        console.log(error);
        res.render('error',{
            error
        })
    }
})
app.get('/delte-todo/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        let msg = await Todos.deleteTodo(id);
        console.log(msg);
        res.redirect('/');
    } catch{
        res.render('error',{
            error
        })
    }
})
app.post('/todos',async(req,res)=>{
    const {task,description} =req.body;
    try{
        let msg = await Todos.addTodo(task,description);
        console.log(msg);
        res.redirect('/');
    } catch(error){
        console.log(error);
        res.render('error',{
            error
        })
    }
})
mongoose.connect('mongodb://localhost:27017/todos')
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`http://localhost:${PORT}`)
        })
    })