import React, { Component } from 'react'
import House from '../House/House'
import './Dashboard.css'
import { Link } from 'react-router-dom';

export default class Dashboard extends Component { 
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() { 
        return (
            <div className='dashboard'>
                <div className= 'top'>
                    <h1>Dashboard</h1>
                    <Link to = '/wizard'><button className='new-property-button'>Add New Property</button></Link>
                </div>
                <House />
            </div>
        )
    }
} 