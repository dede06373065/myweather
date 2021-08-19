import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const SearchBar=styled.div`
text-align:center;`

export default class Search extends Component {

    search=()=>{
        const cityName=this.cityName.value
        if (cityName) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=2ece6441e298124f969938e7eb0d0302`).then(
                response => {
                    const currentObj = response.data
                    this.props.show(currentObj)
                }, error => { alert('please input the correct city name') }
            )
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=2ece6441e298124f969938e7eb0d0302`).then(
                res=>{
                    const forecastObj=res.data.list
                    this.props.showforecast(forecastObj)
                },error=>{console.log(error)}
            )
        }else{console.log('null')}
        this.cityName.value=''
    }
    
    render() {
        return (
            <SearchBar>
                <input type="text" placeholder="city name..." ref={c=>this.cityName=c}/>&nbsp;
                <button onClick={this.search}>Search</button>
            </SearchBar>
        )
    }
}
