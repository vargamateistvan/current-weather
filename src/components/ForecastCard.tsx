import React from 'react';
import WeatherIcon from 'react-icons-weather';
import { Card, Typography } from 'antd'
import { Forecast } from '../types'

const { Text } = Typography;

const ForecastCard: React.FC<Forecast> = (props) => {
    const { main, dt_txt, weather } = props

    const getTime = (time: string) => {
        const date = new Date(time)
        return `${date.getHours()}:${date.getMinutes()}0`
    }

    return (
        <Card
            style={{
                width: 150,
                justifyContent: "center",
                flexFlow: "row wrap"
            }}
        >
            <Text>{getTime(dt_txt)}</Text>
            <div
                style={{
                    fontSize: 16,
                }}
            >
                <WeatherIcon
                    name="owm"
                    iconId={weather[0].id}
                    flip="horizontal"
                    rotate="90"
                    style={{
                        marginRight: 25
                    }}
                />
                <Text>{Math.round(main.temp)} °C</Text>
            </div>
            <Text>{weather[0].main}</Text>
        </Card>
    )
}

export default ForecastCard