import React, { Component } from 'react';
import './Moviedata.css';

class Moviedata extends Component {
	render() {
		return (
			<h3 className="moviedata">Featured in <span className="movie-number">N</span> films</h3>
		);
	}
}

export default Moviedata;