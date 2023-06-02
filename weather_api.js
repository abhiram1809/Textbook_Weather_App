const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(express.static(__dirname));
app.use(express.json());
app.use(cors()); // Enable CORS

// Function to fetch weather data from a weather API
const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=3f0fc745235a4ef9ba5193920230206&q=${city}`);
    return response.data.current.temp_c + 'C'; // Extracting temperature in Celsius
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

// POST endpoint to get weather for multiple cities
app.post('/getWeather', async (req, res) => {
  try {
    const { cities } = req.body;
    const weatherData = {};

    for (const city of cities) {
      const weather = await fetchWeatherData(city);
      weatherData[city] = weather;
    }

    res.json({ weather: weatherData });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
