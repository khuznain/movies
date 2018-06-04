import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './containers/HomePage';
import Footer from './components/footer';
import TopNavigation from './containers/TopNavigation';

class App extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <Route path="/" exact={true} component={ HomePage } />
        <Footer/>
      </div>
    );
  }
}

export default App;
