import React, { Component } from 'react'
import House from '../House/House'
import './Dashboard.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            houses: []
        }
    }

    componentDidMount = () => { 
        axios.get('/house/all')
            .then(houses => {
                this.setState({
                    houses: houses.data
                })
        })

    }

    render() { 

        const houses =( this.state.houses.map((house, index) => {
            return (
                <House
                    key={index}
                    name={house.name}
                    zip={house.zip}
                    city={house.city}
                    id={house.id}
                    state={house.state}
                    address={house.address}
                />
            )
        }) )
        return (
            <div className='dashboard'>
                <div className= 'top'>
                    <h1>Dashboard</h1>
                    <Link to = '/wizard'><button className='new-property-button'>Add New Property</button></Link>
                </div>
                <h1 className='home-listing'>Home Listings</h1>
                {this.state.houses.length ? houses : <h1 className = 'loading'>Loading...</h1>}
            </div>
        )
    }
} 