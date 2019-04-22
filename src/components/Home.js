import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Home extends Component {

  render() {
		return(
		<div className="container vh-100 ">
			<div className="d-flex align-items-center justify-content-center h-100">
				<div className="d-flex flex-column">
					<h1 className="text align-self-center p-2">Welcome to the brewerydb api</h1>
					<h4 className="text align-self-center p-2">Click on the beername to get more information</h4>
											<Link to="/beerlist" type=""button className="btn btn-danger align-self-center p-2">Get a list of all the beers</Link>
				</div>
			</div>
		</div>
    );
  }
}

export default Home;
