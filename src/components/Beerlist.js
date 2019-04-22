import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
const baseURL = 'http://api.brewerydb.com/v2/beers/?key=76c7cea02e9919a762011e3f44c96e37';
const proxy = `https://cors-anywhere.herokuapp.com/${baseURL}`;
const axios = require('axios');


class Beerlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      id: ''
    };

  }

  // handleClick = (event) =>
  // console.log(event.target.id)
  //   this.setState({ id: event.target.id });

  handleClick(e){
     console.log(e.target.id);
  }

  componentDidMount() {
  axios.get(proxy)
    .then(res => this.setState({ beers: res.data.data}))

    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

  render() {
    return (
      <div className="App">
        {console.log(this.state)}
        <ul>
          {this.state.beers.map(beer =>{
        return <li key={beer.id} id = {beer.id} onClick={this.handleClick}>
					{/* <Link to="/details">{beer.name}</Link> */}
					<Link to={{
						  pathname: '/details',
							state: {
								id: beer.id
							}
						}}>Name: {beer.name} abv: {beer.abv} ibu:{beer.ibu}</Link>

        </li>
   })}
        </ul>
      </div>
    );
  }
}

export default Beerlist;
