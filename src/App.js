import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import House from './components/House/House'
import Wizard from './components/Wizard/Wizard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Wizard />
        <Dashboard />
        
      </div>
    );
  }
}

export default App;
