import React from 'react';
import './App.css';
import WeatherCard from "./components/WeatherCard"
import { getCurrentWeather } from "./utils/getWeather"

const App: React.FC = () => {
  const currentWeather = getCurrentWeather("Budapest")

  return (
    <div className="App">
      <WeatherCard></WeatherCard>
    </div>
  );
}

export default App;
