const apiKey = '4013f1a9967e3fb88277523cd83d5944';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather() {
  const cityInput = document.getElementById('cityInput').value;
  const url = `${apiUrl}?q=${cityInput}&appid=${apiKey}&units=metric`;

  try {
    document.getElementById('loader').style.display = 'block';
    const response = await fetch(url);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    document.getElementById('weatherInfo').innerHTML = 'Error fetching weather data. Please try again.';
  } finally {
    document.getElementById('loader').style.display = 'none';
  }
}

function displayWeather(data) {
  const cityName = data.name;
  const temperature = data.main.temp;
  const description = data.weather[0].description;

  const weatherInfo = `
    <h2>${cityName}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Description: ${description}</p>
  `;
  document.getElementById('weatherInfo').innerHTML = weatherInfo;
}