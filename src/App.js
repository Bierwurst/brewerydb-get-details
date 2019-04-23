import React from 'react';
import Home from './components/Home';
import Beerlist from './components/Beerlist';
import Details from './components/Details';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
const API_KEY = `${process.env.REACT_APP_BREWERYDB_API_KEY}`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/beerlist" component={ Beerlist }/>
          <Route exact path="/details" component={ Details }/>
        </Switch>
      </Router>
    )
  }
}

export default App
