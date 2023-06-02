# Node.js Server and UI Weather App

This repository contains a Node.js server built with Express that fetches real-time weather data from a weather API based on the input cities. Additionally, it provides a simple UI app that allows users to input city names and display the corresponding weather results.

## Server

The server is responsible for handling API requests and fetching weather data from a weather service provider. It exposes a single endpoint `/getWeather` that accepts a POST request with city names and responds with real-time weather results.

### Installation

1. Make sure you have Node.js installed on your system. You can download and install it from the official Node.js website (https://nodejs.org).

2. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/abhiram1809/Textbook_Weather_App

3. Install the required dependencies by navigating to the project directory and running:
 
   ```bash
    npm install
### Usage
1. Obtain an API key from a weather service provider. Replace 'YOUR_API_KEY' in the server code (server.js) with your actual API key.

2. Start the server by running the following command:

   ```bash
    node server.js
4. The server will start running on http://localhost:3000.

5. Open your web browser and visit http://localhost:3000/index.html to access the UI app.

6. Enter the names of the cities you want to get weather data for, separated by commas, in the provided input box.

7. Click the "Get Weather" button.

8. The app will make a request to the server, fetch the real-time weather data, and display the results on the page.

## CORS Issue
If you encounter a CORS issue while running the UI app locally, please make sure to serve both the server and the UI app from a local server. Follow the instructions in the "Installation" section of the server documentation.
