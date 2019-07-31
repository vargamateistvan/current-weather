type WeatherElement = {
    id: number
    icon: string
    main: string
}

export type Weather = {
    main: {
        temp: number,
        pressure: number,
        humidity: number,
        temp_min: number,
        temp_max: number
    }
    name: string
    sys: {
        sunrise: number
        sunset: number
    }
    weather: Array<WeatherElement>
    wind: {
        speed: number
        deg: number
    }
}

export type Forecast = {
    main: {
        temp: number,
    }
    dt: number
    dt_txt: string
    weather: Array<WeatherElement>
}