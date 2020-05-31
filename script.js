let now = new Date();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let time = document.querySelector("#time");
time.innerHTML = `${day} ${hours}:${minutes}`;

function showTemperaturee(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temp").innerHTML = Math.round(response.data.main.temp);
}


function search(event) {
    event.preventDefault();
    let apiKey = "7720c28518514a184cd11489092835d0";
    let city = document.querySelector("#search-text-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperaturee);
}

let form = document.querySelector("#seach-form");
form.addEventListener("submit", search);

function showTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#city");
    temperatureElement.innerHTML = response.data.main.temp;
}


