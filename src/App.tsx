import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import { Input, Layout, List, Typography, Divider } from 'antd'
import CurrentWeatherCard from "./components/CurrentWeatherCard"
import ForecastCard from "./components/ForecastCard"
import { getCurrentWeather, getHourlyForecast } from "./utils/getWeather"
import { Forecast, Weather } from './types';

const { Search } = Input
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography

const App: React.FC = () => {
  const [currentWeather, setCurrentWeather] = React.useState<Weather | null>(null)
  const [forecast, setForecast] = React.useState<Forecast[] | []>([])

  const getWeather = React.useCallback(async (city: string) => {
    if (!city) {
      return
    }

    const result = await getCurrentWeather(city)

    if(!result) {
      setCurrentWeather(null)
      setForecast([])
      return
    }

    setCurrentWeather(result)
    await getForecast(city)
  }, [])

  const getForecast = async (city: string) => {
    const result = await getHourlyForecast(city)

    if(!result) {
      return
    }

    setForecast(result.list)
  }

  const getForecastHour = (time: string) => {
    return new Date(time).getHours()
  }

  const getForecastDate = (time?: string) => {
    let date;

    if (time) {
      date = new Date(time)
    } else {
      date = new Date()
    }

    return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
  }

  React.useEffect(() => {
    getWeather("Budapest")
  }, [getWeather])

  console.log("Current Weather", currentWeather)
  console.log("Forecast", forecast)

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
          {currentWeather ? 
            (<div>
              <Title>Current Weather in {currentWeather.name}</Title>
              <CurrentWeatherCard
                weather={currentWeather.weather}
                main={currentWeather.main}
                sys={currentWeather.sys}
                name={currentWeather.name}
                wind={currentWeather.wind}
              ></CurrentWeatherCard>
              <Title>Forecast</Title>
              <Divider orientation="left">
                <Title level={3}>{getForecastDate()}</Title>
              </Divider>
              {forecast &&
                <List
                  dataSource={forecast}
                  grid={{
                    gutter: 8,
                    column: 8,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 6,
                    xl: 8
                  }}
                  renderItem={(day: Forecast) => {
                    if (getForecastHour(day.dt_txt) === 0) {
                      return (
                        <div>
                          <Divider orientation="left">
                            <Title level={3}>{getForecastDate(day.dt_txt)}</Title>
                          </Divider>
                          <List.Item>
                            <ForecastCard
                              key={day.dt}
                              weather={day.weather}
                              main={day.main}
                              dt_txt={day.dt_txt}
                              dt={day.dt}
                            ></ForecastCard>
                          </List.Item>
                        </div>
                      )
                    }

                    return (
                      <List.Item>
                        <ForecastCard
                          key={day.dt}
                          weather={day.weather}
                          main={day.main}
                          dt_txt={day.dt_txt}
                          dt={day.dt}
                        ></ForecastCard>
                      </List.Item>
                    )
                  }
                }/>}
            </div>) 
            : (<Text>City not found </Text>)}
        </div>
      </Content>

      <Footer style={{ textAlign: 'center', bottom: 0 }}>Current Weather ©2019 Created by Varga Máté István</Footer>
    </Layout>
  );
}

export default App;
