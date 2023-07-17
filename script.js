const API_URL = `http://api.weatherapi.com/v1/current.json?key=c4e1ba3945eb40c181574417231707&aqi=no&q=`;

document.querySelector(".icon").addEventListener("click", getWeather);

async function getWeather() {
  let city = document.querySelector("input").value;
  let result = await fetch(`${API_URL}${city}`);
  const data = await result.json();

  document.querySelector(".temp").innerHTML = data.current.temp_c + "°C";
  document.querySelector(".city").innerHTML = data.location.name;
  document.querySelector(".wind__value").innerHTML =
    data.current.wind_kph + "km/h";
  document.querySelector(".humidity__value").innerHTML =
    data.current.humidity + "%";

  document.querySelector(".weather__image").src = data.current.condition.icon;
}
