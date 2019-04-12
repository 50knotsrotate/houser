import React, { Component } from 'react'
import House from '../House/House'

export default class Dashboard extends Component { 
    constructor(props) {
        super(props)
    }

    render() { 
        return (
            <div>
                <h1>Dahsboard</h1>
                <House />
            </div>
        )
    }
} 