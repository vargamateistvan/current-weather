//import weatherAPI from "../../config"

const weatherAPI = "https://api.openweathermap.org/data/2.5"

export async function getCurrentWeather(cityName: string) {
    try {
        const response = await fetch(`${weatherAPI}/weather?q=${cityName}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`, {
            method: "GET",
            headers:{
                'Accept': 'application/json'
            },
        })
    
        const result = await response.json()

        if (result.cod === "404") {
            throw new Error("No city found!")
        }

        if (result.cod === 429) {
            throw new Error("Too many request")
        }
        
        return result
    } catch(error) {
        console.error(error)
    }
}

export async function getHourlyForecast(cityName: string) {
    try {
        const response = await fetch(`${weatherAPI}/forecast?q=${cityName}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`, {
            method: "GET",
            headers:{
                'Accept': 'application/json'
            },
        })
    
        const result = await response.json()

        if (result.cod === "404") {
            throw new Error("No city found!")
        }

        return result
    } catch(error) {
        console.error(error)
    }
}
