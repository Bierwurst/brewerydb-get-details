import React from 'react';
import Home from './components/Home';
import Beerlist from './components/Beerlist';
import Details from './components/Details';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();



class App extends React.Component {
  render() {
    return (
      <Router history={history}>
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
