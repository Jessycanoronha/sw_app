import React, { Component } from 'react';
import '../css/Moviedata.css';

class Moviedata extends Component {
	render() {
		let movieData = this.props.planetFilms
		console.log(movieData)
		return (
			<h3 className="moviedata">Featured in <span className="movie-number">{movieData}</span> films</h3>
		);
	}
}

export default Moviedata;