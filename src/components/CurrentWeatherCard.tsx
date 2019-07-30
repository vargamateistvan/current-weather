import React from 'react';
import WeatherIcon from 'react-icons-weather';
import { Card, Typography } from 'antd'

const { Title, Text } = Typography;

type Props = {
    main: {
        temp: number,
        pressure: number,
        humidity: number,
        temp_min: number,
        temp_max: number
    }
    name: string
    system: {
        sunrise: number
        sunset: number
    }
    weather: {
        id: number
        icon: string
        main: string
    }
    wind: {
        speed: number
        deg: number
    }
}

const CurrentWeatherCard: React.FC<Props> = (props) => {
    const { main, name, system, weather, wind } = props

    const getDate = (time: number) => {
        const date = new Date(time)
        return `${date.getHours()}:${date.getMinutes()}`
    }

    return (
        <Card
            style={{
                width: 500
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
                </div>
            </div>

            <div>
                <Text>Sunrise: {getDate(system.sunrise)}</Text>
                <br/>
                <Text>Sunset: {getDate(system.sunset)}</Text>
            </div>
        </Card>
    )
}

export default CurrentWeatherCard