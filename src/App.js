import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './containers/HomePage';
import TopNavigation from './containers/TopNavigation';

class App extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
          <div className="container">
            <Route path="/" exact={true} component={ HomePage } />
          </div>
      </div>
    );
  }
}

export default App;
