import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MovieList from './containers/MovieList';
import MoviesDetailPage from './containers/MoviesDetailPage';
import ShowList from './containers/ShowList';
import ShowDetailPage from './containers/ShowDetailPage';
import TopNavigation from './containers/TopNavigation';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
          <div className="container" style={{ marginTop: '60px'}}>
            <Route path="/" exact={true} component={ MovieList } />
            <Route path="/movies" exact={true} component={ MovieList } />
            <Route path="/movies/:id" exact={true} component={ MoviesDetailPage } />
            <Route path="/shows" exact={true} component={ ShowList } />
            <Route path="/shows/:id" exact={true} component={ ShowDetailPage } />
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
