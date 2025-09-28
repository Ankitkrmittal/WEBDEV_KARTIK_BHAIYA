const express = require('express');
const path = require('path');
const app = express();
const PORT =4444;


app.use(express.urlencoded({extended:true}));
const {MongoClient} = require('mongodb');
//const url = 'mongodb://localhost:27017';
const url = "mongodb+srv://akm787614:ankit@cluster0.h3fbeny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(url);
const dbName = 'project';
let db;

app.get('/',async(req,res)=>{
    const tasks = db.collection('tasks');
    const data =await tasks.find({}).toArray();
    res.send(data);
})
app.post('/task',async(req,res)=>{
    const {name,duartion} = req.body;
    const tasks = db.collection('tasks');
    const newtask = await tasks.insertOne({
        name,
        duartion
    })
    res.send(newtask);
})
client.connect()
     
    .then(()=>{
        db = client.db(dbName);
        app.listen(PORT,(req,res)=>{
            console.log(`http://localhost:${PORT}`);
        })
    })
