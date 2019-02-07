import React, { Component } from 'react';
import Weather from './Weather';

class MainContainer extends Component {
    constructor(){
        super();
        this.state = {
            weather: {},

        }
    }
    getWeather = async () => {
        const apiRes = await fetch('https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?zip=80304,us&appid=ab4c6a9bfdfb01add34a81395bf35b40');
        const apiWeather = await apiRes.json();
        console.log('====');
        console.log(apiWeather)
        
        this.setState({
            weather: apiWeather.main
        })
    }
    componentDidMount(){
        this.getWeather();
    }
    render(){
        return(
            <div>
                <h1>MainContainer, you are logged in</h1>
                <Weather weather={this.state.weather}/>
            </div>
        )
    }
}


export default MainContainer