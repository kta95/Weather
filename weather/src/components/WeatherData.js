
const WeatherData = ({ city, weather}) => {
    if (!weather) {
        return(
            <div></div>
        )
    }
    return (
        <>
            <h3>Weather in {city}</h3>    
            <div><strong>temperature: </strong>{weather.temperature} Celcius</div>    
            <img src={weather.weather_icons} alt='weather-pic'/>
            <p>wind: {weather.wind_speed} mph direction {weather.wind_dir}</p>
        </>
    )
}

export default WeatherData