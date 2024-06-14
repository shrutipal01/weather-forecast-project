
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weather_img =document.querySelector('.weather-img');
const temperature =document.querySelector('.temperature');
const description =document.querySelector('.description');
const humidity =document.querySelector('.humidity');
const wind =document.querySelector('.wind');
async function checkWeather(city){
const apiKey = "900bb2e164d8f8bcf155cd44a3659fc6";
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=${apiKey}';
const weather_data = await fetch('${apiUrl}').then(response => response.json());
if(weather_data.cod === '404'){
    console.log("error");
    return;

}
temperature.innerHTML='${Math.round(weather_data.main.temp - 273.15)}°C';
description.innerHTML='${weather_data.weather[0].description}';
humidity.innerHTML='${weather_data.main.humidity}%';
wind.innerHTML='${weather_data.wind.speed}km/h';

switch(weather_data.weather[0].main){
    case 'Clouds':
        weather_img.src = 'images/clouds.jpeg';
        break;
    case 'Clear':
        weather_img.src = 'images/Clear.jpeg';
        break;
    case 'Rain':
        weather_img.src = 'images/Rain.jpeg';
        break;
    case 'Mist':
        weather_img.src = 'images/Mist.jpeg';
        break;
    case 'Snow':
        weather_img.src = 'images/Snow.jpeg';
        break;
    case 'Drizzle':
        weather_img.src = 'images/Drizzle.jpeg';
        break;
}
}

          
          






searchBtn.addEventListener('click', function () {
    console.log("clicked")
    checkWeather(searchBox.value);
})