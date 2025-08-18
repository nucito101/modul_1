import { WeatherType } from "./enum/Weather"

function getWeatherForecast(): Promise<WeatherType> {
  return new Promise((resolve, reject) => {
    const randomVal = Math.floor(Math.random() * 10)
    if (randomVal >= 0 && randomVal <= 6) {
      resolve(randomVal as WeatherType)
    } else {
      reject("Weather forecast could not be determined")
    }
  })
}
getWeatherForecast()
  .then((weather: WeatherType) => {
    console.log("Weather", WeatherType[weather])
  })
  .catch((err: string) => {
    console.error(err)
  })
