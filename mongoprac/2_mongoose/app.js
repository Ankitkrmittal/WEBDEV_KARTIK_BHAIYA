const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const PORT = 4444;
const url ='mongodb://localhost:27017/mydb';
app.use(express.urlencoded({extended:true}));
const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
 
    city: String,
    date: { type: Date, default: Date.now },
})

const games = mongoose.model('game',gameSchema);
//here we are writing singular like game mongoose will automatically if we have a plural of it like games here

app.get('/games', async(req,res)=>{
    const allgames = await games.find();
    res.send(allgames);
})

app.post('/games', async (req, res) => {
    const {name,  city} = req.body;
    let newgame= await games.create({
        name,
        
        city: city || ''
    })
    res.send(newgame);
})
mongoose.connect(url)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`http://localhost:${PORT}`);
        })
    })


    