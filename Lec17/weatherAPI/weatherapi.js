let APIKey ='4002800b9d4237d975b547f8460d28d1'
let weatherurl = (lat,lon,APIKey) =>`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`
let getlanandlon =(APIKey,city,limit=1) => `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${APIKey}`
let btn = document.querySelector('button');
let cityName = document.querySelector('input');

async function getWeather(city){
      let {data} = await axios.get(getlanandlon(APIKey,city));
      
      const {lat,lon} = data[0];
      
      let WeatherData = await axios.get(weatherurl(lat,lon,APIKey));
      
      WeatherData = WeatherData.data;
      return WeatherData;
}
btn.addEventListener('click',async()=>{
    if(cityName.value.trim() ==0) return;
       let data = await getWeather(cityName.value);
       console.log("FETCHED",data);
});



