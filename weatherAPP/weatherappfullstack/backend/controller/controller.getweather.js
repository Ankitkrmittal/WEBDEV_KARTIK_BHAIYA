const express = require('express')
const axios = require('axios');
const APIkey='4002800b9d4237d975b547f8460d28d1'


const url =(lat,lon)=>`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;
const latandlon=(city,limit=1)=>`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${APIkey}`;


 async function getweather(req,res){
    try {
    const city = req.query.city;
   
   const data = await axios.get(latandlon(city));

   
   const {lat,lon} = data.data[0];
   
   const  weatherdata = await axios.get(url(lat,lon));
   res.json(weatherdata.data);
    } catch (error) {
       // console.error(error);
    res.status(500).json({ error: "Error fetching weather" });
    }
    
}

module.exports={getweather};