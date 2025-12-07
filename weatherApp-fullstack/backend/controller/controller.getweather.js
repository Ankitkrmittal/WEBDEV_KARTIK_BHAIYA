
const APIkey = process.env.APIKEY;

const URL =(lat,lon,APIkey)=>`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${APIkey}`

const latandlon =(cityname,APIkey)=> `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${APIkey}`
