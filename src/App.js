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
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* <header className="container vh-100 ">
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className="d-flex flex-column">
              <h1 className="text align-self-center p-2">Welcome to the brewerydb api</h1>
              <h4 className="text align-self-center p-2">Click on the beername to get more information</h4>
                          <Link to="/beerlist" type=""button className="btn btn-danger align-self-center p-2">Get a list of all the beers</Link>
            </div>
          </div>
        </header> */}
        {/* <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <h2 className="col-12">Welcome to the brewerydb api</h2>
            <h3 className="col-12">Click on the beername to get more information</h3>
            <Link to="/beerlist" type=""button className="btn btn-danger align-self-center p-2">Get a list of all the beers</Link>
          </div>
        </div> */}
        {/* <div className="container">
          <h2 className="col-12">Welcome to the brewerydb api</h2>
          <h3 className="col-12">Click on the beername to get more information</h3>
          <Link to="/beerlist" type=""button className="btn btn-primary btn-lg">Get a list of all the beers</Link>
        </div> */}

        {/* <ul>
          <li><Link to="/beerlist">Beerlist</Link></li>
          <li><Link to="/details">Details</Link></li>
        </ul> */}
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
