const apiKey = "900bb2e164d8f8bcf155cd44a3659fc6";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    if (city == "") {
        alert("Please enter a city name");
    } else {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (Response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            document.querySelector(".details").style.display = "none";
        } else {
            document.querySelector(".error").style.display = "none";
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".details").style.display = "block";
        }
        var data = await response.json()
        console.log(data);
        document.querySelector(".city").innerHTML = data.city.name;
        document.querySelector(".temp").innerHTML = Math.round(data.list[0].main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.list[0].wind.speed + "km/h";

        if (data.list[0].weather[0].main == 'Clear') {
            weatherIcon.src = "images/Clear.jpeg";
        } else if (data.list[0].weather[0].main == 'Clouds') {
            weatherIcon.src = "images/clouds.jpeg";
        } else if (data.list[0].weather[0].main == 'Rain') {
            weatherIcon.src = "images/Rain.jpeg";
        } else if (data.list[0].weather[0].main == 'Drizzle') {
            weatherIcon.src = "images/Drizzle.jpeg";
        } else if (data.list[0].weather[0].main == 'Mist') {
            weatherIcon.src = "images/Mist.jpeg";
        } else if (data.list[0].weather[0].main == 'Snow') {
            weatherIcon.src = "images/Snow.jpeg";
        }
    }
}






searchBtn.addEventListener('click', function () {
    console.log("clicked")
    checkWeather(searchBox.value);
})