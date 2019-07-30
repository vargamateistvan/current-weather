import React from 'react';
import './App.css';
import WeatherCard from "./components/WeatherCard"
import { getCurrentWeather } from "./utils/getWeather"

require('dotenv').config()

const App: React.FC = () => {
  const currentWeather = getCurrentWeather("Budapest")

  console.log("ENV", process.env)

  return (
    <div className="App">
      <WeatherCard></WeatherCard>
    </div>
  );
}

export default App;
