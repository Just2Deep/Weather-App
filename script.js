const API_KEY = "a35a6966e534716e503d7fb785038c02";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

let city = document.querySelector("input");
let search = document.querySelector("button");

async function getWeather(city) {
  let result = await fetch(API_URL + `city=${city}`);
  const data = await result.json();
}

search.addEventListener("click", getWeather(city));
