import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import { Input, Layout, Typography } from 'antd'
import CurrentWeatherCard from "./components/CurrentWeatherCard"
import { getCurrentWeather, getHourlyForecast } from "./utils/getWeather"

const { Search } = Input
const { Header, Content, Footer } = Layout;
const { Text } = Typography

const App: React.FC = () => {
  const [currentWeather, setCurrentWeather] = React.useState()
  const [forecast, setForecast] = React.useState()

  const getWeather = async (city: string) => {
    const result = await getCurrentWeather(city)

    if(result.cod === 404) {
      throw new Error("No city found!")
    }
    setCurrentWeather(result)
  }

  const getForecast = async (city: string) => {
    setForecast(await getHourlyForecast(city))
  }
  
  //getWeather("Budapest")
  console.log("Current Weather", currentWeather)

  return (
    <Layout className="layout">
      <Header>
        <Search
          placeholder="Enter city name"
          onSearch={value => getWeather(value)}
          size="large"
        ></Search>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, height: "100%" }}>
          {currentWeather ? (<CurrentWeatherCard
            weather={currentWeather.weather[0]}
            main={currentWeather.main}
            system={currentWeather.sys}
            name={currentWeather.name}
            wind={currentWeather.wind}
          ></CurrentWeatherCard>) : (<Text>
            City not found
          </Text>)}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Current Weather ©2019 Created by Varga Máté István</Footer>
      </Layout>
  );
}

export default App;
