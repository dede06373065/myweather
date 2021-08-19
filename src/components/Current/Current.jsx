import React, { Component } from 'react'


export default class Current extends Component {

    render() {
        const { cityData } = this.props
        if(cityData){
            return (
                <div>
                    <h2>{cityData.city}</h2>
                    {
                        cityData.cityData.map((item,index)=>{
                            return <p key={index}>{item}</p>
                        })
                    }
                    
                </div>
            )
        }else{
            return <p>Loading...</p>
        }
        
    }
}
