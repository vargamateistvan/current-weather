import React from 'react';
import WeatherIcon from 'react-icons-weather';
import { Card, Typography } from 'antd'
import { Weather } from "../types"

const { Title, Text } = Typography;

const CurrentWeatherCard: React.FC<Weather> = (props) => {
    const { main, name, system, weather, wind } = props

    const getTime = (time: number) => {
        const date = new Date(time)
        return `${date.getHours()}:${date.getMinutes()}`
    }

    return (
        <Card
            style={{
                maxWidth: 500,
                justifyContent: "center",
                flexFlow: "row wrap"
            }}
        >
            <div
                style={{
                    marginBottom: 20
                }}
            >
                <Title level={3}>{name}</Title>
                <Title level={4}>{weather.main}</Title>
            </div>

            <div
                style={{
                   display: 'flex',
                   justifyContent: 'space-between'
                }}
            >    
                <div
                    style={{
                        fontSize: 60,
                    }}
                >
                    <WeatherIcon
                        name="owm"
                        iconId={weather.id}
                        flip="horizontal"
                        rotate="90"
                        style={{
                            marginRight: 25
                        }}
                    />
                    <Text>{Math.round(main.temp)} °C</Text>
                </div>

                <div>
                    <Text>Humidity: {main.humidity}%</Text>
                    <br/>
                    <Text>Wind: {wind.speed} km/h</Text>
                    <br/>                
                    <Text>Sunrise: {getTime(system.sunrise)}</Text>
                    <br/>
                    <Text>Sunset: {getTime(system.sunset)}</Text>
                </div>
            </div>
        </Card>
    )
}

export default CurrentWeatherCard