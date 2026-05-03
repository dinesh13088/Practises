const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-btn");
const statusEl = document.querySelector("#status");
const weatherResult = document.querySelector("#weather-result");

const API_KEY = "";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function fetchWeather(city) {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("city not found");
    return response.json();
  }
  catch (error) {
    throw error
  }
}
function ShowLoading() {
  weatherResult.textContent = `<p>Loading</p>`
}

function renderWeather(data) {
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  weatherResult.innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp} C</p>
    <p>Condition: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <img id="weather-icon" src="${iconUrl}"/>
  `;
}
function ShowError(message){
  weatherResult.textContent=`<p style="color:red">${message}</p>`
}
searchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();

  if (!city) {
    ShowLoading()
  }

  try {
    const data = await fetchWeather(city);
    renderWeather(data);
  }
  catch (error) {
    ShowError(error.message||"something is wrong")
  }

});
