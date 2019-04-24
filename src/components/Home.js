import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Home extends Component {

  render() {
    const pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
		return(

		<div className="container vh-100 ">
			<div className="d-flex align-items-center justify-content-center h-100">
				<div className="d-flex flex-column">
					<h1 className="text align-self-center p-2">Welcome to the brewerydb api</h1>
					<h4 className="text align-self-center p-2">Please choose a page</h4>
            <div className="d-flex flex-wrap align-items-center justify-content-center h-100 page-index-container">
              {pages.map(page =>{
                    return <div key={page}>
                              <Link to={{
                                  pathname: '/beerlist',
                                  state: {
                                    page
                                  }
                                }} type=""button className="btn btn-secondary align-self-center p-2 page-index">
                                <div>page {page}</div>
                              </Link>
                          </div>
                       })}
            </div>
				</div>
			</div>
		</div>
    );
  }
}

export default Home;
