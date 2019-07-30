import React from 'react';
import WeatherIcon from 'react-icons-weather';
import { Card } from 'antd'

const WeatherCard: React.FC = () => {
    return (
        <Card>
            <WeatherIcon name="owm" iconId="200" flip="horizontal" rotate="90" />
        </Card>
    )
}

export default WeatherCard