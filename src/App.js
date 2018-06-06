import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MoviesList from './containers/MoviesList';
import TopNavigation from './containers/TopNavigation';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
          <div className="container" style={{ marginTop: '60px'}}>
            <Route path="/movies" exact={true} component={ MoviesList } />
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
