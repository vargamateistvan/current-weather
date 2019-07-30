//import weatherAPI from "../../config"

const weatherAPI = "https://api.openweathermap.org/data/2.5"

export async function getCurrentWeather(cityName: string) {
    const response = await fetch(`${weatherAPI}/weather?q=${cityName}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`, {
        method: "GET",
        headers:{
            'Accept': 'application/json'
        },
    })

    return await response.json()
}

export async function getHourlyForecast(cityName: string) {
    const response = await fetch(`${weatherAPI}/forecast?q=${cityName}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`, {
        method: "GET",
        headers:{
            'Accept': 'application/json'
        },
    })

    return await response.json()
}
