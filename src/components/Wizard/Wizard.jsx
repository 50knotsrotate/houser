import React, { Component } from 'react'
import './Wizard.css'
import { Link } from 'react-router-dom'

export default class Wizard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='wizard'>
                <div className='top'>
                    <h1>Add New Listing</h1>
                    <Link to = '/'> <button className='cancel-button'>Cancel</button></Link>
                </div>
                <div className='form'>
                    <div className='form-item'>
                        <h1>Property Name</h1>
                        <input type = 'text' placeholder = 'What is da name'/>
                    </div>
                    <div className='form-item'>
                        <h1>Address</h1>
                        <input type = 'text' placeholder = 'Address'/>
                    </div>
                    <div className='city-state-zip'>
                        
                        <div className='form-item'>
                            <h1>City</h1>
                            <input type='text' placeholder='City' />
                        </div>

                        <div className='form-item'>
                            <h1>State</h1>
                            <input type='text' placeholder='State' />
                        </div>

                        <div className='form-item'>
                            <h1>Zip</h1>
                            <input type='number' placeholder='Zip' />
                        </div>
                    </div>
                </div>
                <button className = 'complete-button'>Complete</button>
            </div>
        )
    }
} 