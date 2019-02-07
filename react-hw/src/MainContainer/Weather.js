import React from 'react';

const Weather = (props) => {
    console.log(props.weather)
    console.log(props.weather.temp)
    return(
        <div>
            <p>Boulder Weather</p>
            <p>Temperature: {Math.round((props.weather.temp - 273.15) * (9/5) + 32)} Farenheit</p>
            <p>Pressure: {props.weather.pressure}</p>
        </div>
    )
}

export default Weather