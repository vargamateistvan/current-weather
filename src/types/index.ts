export type Weather = {
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

export type Forecast = {
    main: {
        temp: number,
    }
    dt: number
    dt_txt: string
    weather: {
        id: number
        main: string
    }[]
}