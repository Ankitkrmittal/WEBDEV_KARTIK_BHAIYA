const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('hello world');
})
//taking taking from user using queery parameteres
app.get('/greet',(req,res)=>{
    const { name,city } = req.query;
    res.send(`hi ${name} from ${city} `);

})
// takig data from the client using params
app.get('/movie/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hi you want to watch : ${name}`);
})

app.listen(3333,()=>{
    console.log(`http://localhost:3333`)
});