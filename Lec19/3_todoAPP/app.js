const express = require('express');

const app = express();
const path = require('path');
const PORT = 4444;
let todos=[
   {id: 1,data: 'lo bhai kr dia phela task add'}
];
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'static')));



app.get('/todos',(req,res)=>{
     res.send(todos);
})
 
app.get('/todo/:id',(req,res)=>{
    const  {id} = req.params;
    const data = todos.filter((todo)=> todo.id == +id)
    res.send(data);
})
app.post('/todo',(req,res)=>{
   const {data} = req.body;//here we pass name of the form input 

   todos.push({
        id : todos.length+1,
        data:data
   })
   //res.send(todos);
  res.redirect('/');
})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})
