import { cities } from "../lib/iller"
 import type { WeatherData } from "../lib/weatherdata"


export async function load() {
    const c:WeatherData[]= []
    for ( let i=0;i<4;i++) { 
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+cities[i]+"&appid=a3a4e654769d879711023f26b8d14707")
     let data = await response.json()
     data.name = data.name.replace(" Province", "")
     c.push(data as WeatherData)
    } 
return {c} 
}