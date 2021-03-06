let now = Date.now();
let dateElement = document.querySelector("#time");
dateElement.innerHTML = formatDate(now);


function formatDate(timestamp) {
    let date = new Date(timestamp);
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day = days[date.getDay()];
    return `${day} ${formatHours(timestamp)}`;
}

function formatHours (timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
}

return `${hours}:${minutes}`; 
}


function showTemperaturee(response) {

    celsiusTemperature = response.data.main.temp; 
    let city = document.querySelector("#city").innerHTML = response.data.name;
    let temperatureElement = document.querySelector("#temp");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
    let description = document.querySelector("#description").innerHTML = (response.data.weather[0].description);
    let humidity = document.querySelector("#humidity").innerHTML = (response.data.main.humidity);
    let pressure = document.querySelector("#pressure").innerHTML = (response.data.main.pressure);
    let wind = document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    let dateElement = document.querySelector("#time");
    let iconElement = document.querySelector("#iconone"); 

    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`); 
}


function search(event) {
    event.preventDefault();
    let apiKey = "7720c28518514a184cd11489092835d0";
    let city = document.querySelector("#search-text-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperaturee);
}

function showFahrenheitTemperature(event) {
    event.preventDefault (); 
    let fahrenheitTemperature = (celsiusTemperature* 9 / 5) + 32; 
    let temperatureElement = document.querySelector("#temp"); 
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature); 
}

function showCelciusTemperature(event) {
    event.preventDefault(); 
    let temperatureElement = document.querySelector("#temp"); 
    temperatureElement.innerHTML = Math.round(celsiusTemperature); 
}

let celsiusTemperature = null; 

let form = document.querySelector("#seach-form");
form.addEventListener("submit", search);

function showTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#city");
    temperatureElement.innerHTML = response.data.main.temp;
}

let fahrenheitLink = document.querySelector("#fahrenheit"); 
fahrenheitLink.addEventListener ("click",  showFahrenheitTemperature); 

let celciusLink = document.querySelector("#celsius");
celciusLink.addEventListener("click", showCelciusTemperature); 