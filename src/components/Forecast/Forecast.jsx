import React, { Component } from 'react'
import styled from 'styled-components'
const Ulflex = styled.ul`
display:flex;
list-style-type:none;`
const Li=styled.li`
width:100px;
margin:20px;
padding:10px;
border:1px solid grey;
border-radius:5px 5px 5px 5px;
text-align:center`

export default class Forecast extends Component {
    render() {
        const forecast = this.props.forecastData
        return (
            <Ulflex>
                {
                    forecast.map((item,index)=>{
                        return(
                            <Li key={index}>
                                <h3>{item.degree}</h3>
                                <h3>{item.weather}</h3>
                            </Li>
                        )

                    })
                }
            </Ulflex>
        )
    }
}
