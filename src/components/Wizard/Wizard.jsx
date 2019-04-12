import React, { Component } from 'react'
import './Wizard.css'
import { Link } from 'react-router-dom'

export default class Wizard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''

        }
    }

    handlePropertyName = name => {
        this.setState({
            name
        })
    }

    handleAddressChange = address => { 
        this.setState({
            address
        })
    }

    cancel = () => { 
        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        })
    }

    handleCityChange = city => { 
        this.setState({
            city
        })
    }

    handleStateChange = state => { 
        this.setState({
            state
        })
    }

    handleZipChange = zip => {
        this.setState({
            zip
        })
     }



    render() {
        return (
            <div className='wizard'>
                <div className='top'>
                    <h1>Add New Listing</h1>
                    <Link to = '/'> <button onClick = {this.cancel} className='cancel-button'>Cancel</button></Link>
                </div>
                <div className='form'>
                    <div className='form-item'>
                        <h1>Property Name</h1>
                        <input onChange={e => this.handlePropertyName(e.target.value)} value={this.state.name} type = 'text' placeholder = 'What is da name'/>
                    </div>
                    <div className='form-item'>
                        <h1>Address</h1>
                        <input onChange={e => this.handleAddressChange(e.target.value)} value={this.state.address}type = 'text' placeholder = 'Address'/>
                    </div>
                    <div className='city-state-zip'>
                        
                        <div className='form-item'>
                            <h1>City</h1>
                            <input onChange={e => this.handleCityChange(e.target.value)} value={this.state.city} type='text' placeholder='City' />
                        </div>

                        <div className='form-item'>
                            <h1>State</h1>
                            <input onChange={e => this.handleStateChange(e.target.value)} value={this.state.state} type='text' placeholder='State' />
                        </div>

                        <div className='form-item'>
                            <h1>Zip</h1>
                            <input onChange={e => this.handleZipChange(e.target.value)} value={this.state.zip} type='number' placeholder='Zip' />
                        </div>
                    </div>
                </div>
                <button className = 'complete-button'>Complete</button>
            </div>
        )
    }
} 