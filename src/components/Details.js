import React, { Component } from 'react';
import './components.css';
import {
  Link
} from 'react-router-dom';
const API_KEY = `${process.env.REACT_APP_BREWERYDB_API_KEY}`;

const axios = require('axios');


class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {}
    };

  }

  componentDidMount() {
		const { id } = this.props.location.state
  axios.get(`https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beer/${id}/?key=${API_KEY}`)
    .then(res => this.setState({ beer: res.data.data}))
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

  render() {
		let pivo = this.state.beer;
    return (
      <div className="container mt-5">
        <div className="row">
          {/* {console.log('details', this.state)} */}
  				<div className="card col-6 offset-3" style={{width: "18rem"}}>
            {!pivo.labels
              ? <div className="container label-placeholder">
                  <div className="row h-100">
                    <div className="col text-align-center my-auto">
                      <p className="text-center">no label found</p>
                    </div>

                  </div>
                </div>
            : <img className="card-img-top" src={pivo.labels.large} alt="label"/>}
  				<div className="card-body bg-light">
            <dl className="text-align-center">
              <dt className="card-title">{pivo.name}</dt>
    					<dd className="card-text">abv: {pivo.abv}</dd>
              <dd className="card-text">ibu: {!pivo.ibu ? 'n/a' : pivo.ibu}</dd>
    					<dd className="card-text">isOrganic: {pivo.isOrganic}</dd>
    					<dd className="card-text">year: {!pivo.year ? 'n/a' : pivo.year}</dd>
    					<dd className="card-text">status: {pivo.status}</dd>
              <dd className="card-text">glass: {!pivo.glass ? 'n/a' : pivo.glass.name}
              </dd>
            </dl>

            <Link to="/beerlist" type=""button className="btn btn-secondary align-self-center p-2">Back to list</Link>
  				</div>
  			</div>
        </div>
        </div>

    );
  }
}

export default Details;
