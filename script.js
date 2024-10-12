document.addEventListener("DOMContentLoaded", function() {
    const eindhovenCoords = {
      latitude: 51.4416,
      longitude: 5.4697
    };
  
    fetchWeather(eindhovenCoords);
  });
  
  function fetchWeather(coords) {
    const { latitude, longitude } = coords;
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation&current_weather=true&timezone=auto`;
  
    // Display loading message
    document.getElementById("location").innerText = "Fetching weather data...";
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => updateWeatherInfo(data))
      .catch(error => {
console.error('Fout bij het ophalen van weergegevens:', error);

        document.getElementById("location").innerText = "Unable to fetch weather data.";
      });
  }
  
  function updateWeatherInfo(data) {
    const location = `Eindhoven, Netherlands`; // Updated location
    const hourlyTemperatures = data.hourly.temperature_2m;
    
    // Find the highest temperature of the day
    const maxTemperature = Math.max(...hourlyTemperatures);
  
    // Decide if it's shorts weather based on the highest temperature
    const isShortsWeather = maxTemperature >= 20;
  
    // Display the decision
    document.getElementById("location").innerText = '';
    
  
const shortsDecision = isShortsWeather ? "Ja, je kan vandaag een korte broek dragen!" : "Nee, het is te koud.";
    document.getElementById("shorts-decision").innerText = shortsDecision;
  }
  
