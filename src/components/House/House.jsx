import React, { Component } from 'react'
import './House.css'

export default class House extends Component {
    constructor(props) {
        super(props)

        this.state = {
            house: {
                name: ''
            }
         }
    }

    componentWillMount = () => { 
        const { name } = this.props
        this.setState({
          name
        })
    }

    render() {
        const home = (
            <div className = 'listing'>
                <div className='listing-url'>
                    <h1>Soon to be image</h1>
                </div>
            <div className = 'info'>
                <h2>PROPERTY NAME: {this.props.name}</h2>
                <h2>ADDRESS: {this.props.address}</h2>
                <h2>City: {this.props.city}</h2>
                <h2>Zip: {this.props.zip}</h2>
                </div>
                <div className = 'rent'>
                    <h3>Monthly Mortgage</h3>
                    <h3>Desired rent</h3>
                </div>
                <button>Delete</button>
        </div>
        ) 
        return (  
            <span>{home}</span>
     )
 }
} 