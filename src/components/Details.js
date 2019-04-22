import React, { Component } from 'react';

const baseURL = `http://api.brewerydb.com/v2/beer/c4f2KE/?key=76c7cea02e9919a762011e3f44c96e37`;
// const proxy = `https://cors-anywhere.herokuapp.com/${baseURL}`;
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
  axios.get(`https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beer/${id}/?key=76c7cea02e9919a762011e3f44c96e37`)
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
      <div className="App">
        {console.log('details', this.state)}
				<p>hello from details</p>
				<div className="card" style={{width: "18rem"}}>
				<img className="card-img-top" src={!pivo.labels ? 'https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/image-x-generic-256.png' : pivo.labels.medium} alt="label"/>
				<div className="card-body bg-light">
					<li className="card-text">name: {pivo.name}</li>
					<li className="card-text">status: {pivo.status}</li>
					<li className="card-text">isOrganic: {pivo.isOrganic}</li>
					<li className="card-text">year: {pivo.year}</li>
					<li className="card-text">status: {pivo.status}</li>
          <li className="card-text">glass: {!pivo.glass ? <p>no information availavle</p> : <ul>
                     <li>id: {pivo.glass.id}</li>
                     <li>name: {pivo.glass.name}</li>
                     <li>createDate: {pivo.glass.createDate}</li>
                 </ul>
                   }
          </li>

				</div>
			</div>
      </div>
    );
  }
}

export default Details;
