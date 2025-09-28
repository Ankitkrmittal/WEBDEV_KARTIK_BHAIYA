const express = require('express');
const app = express();
const path = require('path');

const PORT = 4444;


const { MongoClient }  = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
app.use(express.json()); 

app.use(express.urlencoded({ extended: true }));
let dbName  = 'ourdb';
let db;
app.get('/games',async(req,res)=>{
     const games = db.collection('games');
     const data = await games.find({}).toArray();
     res.send(data);

})
app.post('/game',async(req,res)=>{
    const {name,city } = req.body;
    console.log(name,city);
    const games = db.collection('games');
    const newgame = await games.insertOne({
        name,
        city
    })
    res.send(newgame);
})



client.connect()
    .then(() => {
        db = client.db(dbName);
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })