import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter } from 'react-router-dom'
import routes from './routes'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import House from './components/House/House'
import Wizard from './components/Wizard/Wizard'

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Header />
          {routes}
        </div>
     </HashRouter>
    );
  }
}

export default App;
