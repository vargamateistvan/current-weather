//import weatherAPI from "../../config"

const weatherAPI = "https://api.openweathermap.org/data/2.5"

export async function getCurrentWeather(cityName: string) {
    const response = await fetch(`${weatherAPI}/weather?q=${cityName}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`, {
        method: "GET",
        headers:{
            'Content-Type': 'application/json'
        }
    })

    const result = await response.json()

    console.log("R", result)
}

/*
export async function getHourlyForecast({ cityName }) {

}

export async function getDailyForecast({ cityName, dayNum }) {

}

*/