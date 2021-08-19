import React, { Component } from 'react'
import Current from './components/Current'
import Forecast from './components/Forecast'
import Search from './components/Search'

export default class App extends Component {
    state = {
        city: '',
        cityData: [],
        forecast: []
    }
    show = (cityData) => {
        this.setState({
            city: cityData.name
            , cityData: [cityData.main.temp, cityData.wind.speed, cityData.weather[0].main]
        })
    }
    showforecast = (cityData) => {
        let weatherData = []
        for (let i = 0; i < 40; i=i + 8) {
            let temp = {}
            temp = { degree: cityData[i].main.temp, weather: cityData[i].weather[0].main }
            weatherData.push(temp)
        }
        this.setState({forecast:weatherData})
    }

    render() {
        const cityData = this.state
        const {forecast}= this.state

        return (
            <div>
                <Search show={this.show} showforecast={this.showforecast} />
                <hr />
                <Current cityData={cityData} />
                <hr />
                <Forecast forecastData={forecast}/>
            </div>
        )
    }
}

