import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherData from './WeatherData'

const api_key = process.env.REACT_APP_API_KEY
console.log('what is this ', api_key)

const Weather = ({ city }) => {

    const [newWeather, setNewWeather] = useState([])
    const api_key = process.env.REACT_APP_API_KEY   // this works now
    console.log('api key', api_key)
    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`)
            .then(response => {
                console.log('weather data', response.data )
                setNewWeather(response.data)    
            })
    }, [])
    console.log('ww', newWeather.location)
    return (
        <WeatherData city={city} weather={newWeather.current}/>
        )
}


export default Weather