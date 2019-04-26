import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import './components.css';
import Spinner from './Spinner';
const API_KEY = `${process.env.REACT_APP_BREWERYDB_API_KEY}`;
const axios = require('axios');


class Beerlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      isLoading: true
    };
  }

  componentDidMount() {

    const { page } = this.props.location.state
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers/?key=${API_KEY}&p=${page}`)
    .then(res => this.setState({ beers: res.data.data, isLoading: false}))

    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

  render() {
    const { isLoading } = this.state;
    return (
      <div className="App">

        <div className="container mt-5">
          <div className="d-flex align-items-center justify-content-center titel">
            <div className="d-flex flex-column">
              <h3 className="d-inline-block mt-auto">To obtain more information click on the name of the beer</h3>
            </div>
          </div>
          {!isLoading ? this.state.beers.map(beer =>{
                return <div className="row row-backgr mt-3" key={beer.id} id = {beer.id}>
                  <Link className="col-6" to={{
                      pathname: '/details',
                      state: {
                        id: beer.id
                      }
                    }}>
                    <div>{beer.name}</div>
                  </Link>
                    <div  className="col-2 col-backgr">
                      {!beer.abv ? `abv: n/a` : `abv: ${beer.abv}`}
                    </div>
                    <div className="col-2 col-backgr">
                      {!beer.ibu ? `ibu: n/a` : `ibu: ${beer.ibu}`}
                    </div>
              </div>
           })
           : <div className="row row-backgr mt-3">
               <div className="col">
                 <Spinner />
                 </div>
               </div>
             }

          </div>
        </div>

    );
  }
}

export default Beerlist;
