const express = require('express');
const app = express();
//general middle ware, means it will run for all the incomming request
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send("failed to get app crashed");
})
app.get('/greet',(req,res)=>{
    const{name} = req.query;
    res.send(`good morning ${name}`)
})
// app.get('/movie/:name',(req,res)=>{
//     const{name} = req.params;
//     res.send(`Playing ${name}`)
// })
let movies = [
    { id: 1, name: 'Hulk', description: 'A scientist transforms into a giant green rage monster when angered, fighting to control his powers and protect the ones he loves.' },
    { id: 2, name: 'Iron Man', description: 'A billionaire industrialist builds a high-tech suit of armor to escape captivity and becomes a superhero.' },
    { id: 3, name: 'Thor', description: 'The Norse god of thunder is banished to Earth, where he learns humility and earns back his powers.' },
    { id: 4, name: 'Captain America: The First Avenger', description: 'A frail man becomes a super-soldier to fight in World War II and stand against tyranny.' },
    { id: 5, name: 'The Avengers', description: 'Earth’s mightiest heroes must unite to stop an alien invasion led by Loki.' },
    { id: 6, name: 'Guardians of the Galaxy', description: 'A group of intergalactic misfits team up to stop a powerful villain from destroying the galaxy.' },
    { id: 7, name: 'Black Panther', description: 'T’Challa returns home to Wakanda to take the throne and defend his nation from internal and external threats.' },
    { id: 8, name: 'Doctor Strange', description: 'A brilliant but arrogant surgeon learns the mystic arts after a career-ending accident.' },
    { id: 9, name: 'Spider-Man: Homecoming', description: 'Teenager Peter Parker juggles high school life with being Spider-Man under Tony Stark’s mentorship.' },
    { id: 10, name: 'Ant-Man', description: 'A thief gets a second chance at life when he gains the ability to shrink and must pull off a heist to save the world.' }
]

app.get('/details',(req,res)=>{
    const {id} = req.query;
    const movie = movies.filter(m=>m.id==id);
    if(movies.length==0) return res.send('no movie found');
    res.send(movie[0]);
})//
//post req me data body me ata h 
//req.body to read data
//jo frontend se data ata h wo payload hota g 
//image audio video sab post req se bhejte h 
app.post('/addmovie',(req,res)=>{
   // console.log(req.body)
    const { name, description } = req.body;
    const newMovie = {
        name,
        description,
        id: new Date().getTime()
    }
    movies.push(newMovie);
    res.send(movies);
})
app.listen(4444);

