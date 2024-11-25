// Mock data for weather updates
const weatherData = [
    { location: "Mogadishu, Somalia", temperature: "28°C", description: "Sunny", icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png" },
    { location: "Hargeisa, Somalia", temperature: "24°C", description: "Cloudy", icon: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png" },
    { location: "Kismayo, Somalia", temperature: "30°C", description: "Rainy", icon: "https://cdn-icons-png.flaticon.com/512/414/414974.png" }
  ];
  
  // Select elements
  const locationElement = document.querySelector('.location');
  const temperatureElement = document.querySelector('.temperature');
  const descriptionElement = document.querySelector('.description');
  const iconElement = document.querySelector('.icon img');
  const updateButton = document.getElementById('update-weather');
  
  // Update weather data
  updateButton.addEventListener('click', () => {
    const randomWeather = weatherData[Math.floor(Math.random() * weatherData.length)];
    locationElement.textContent = randomWeather.location;
    temperatureElement.textContent = randomWeather.temperature;
    descriptionElement.textContent = randomWeather.description;
    iconElement.src = randomWeather.icon;
  });
  