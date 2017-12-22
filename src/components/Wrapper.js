import React, { Component } from 'react';
import Header from './Header';
import Datalist from './Datalist';
import Moviedata from './Moviedata';
import Button from './Button';
import '../css/Wrapper.css';

class Wrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			randomNumber: null,
		};
		this.btnClick = this.btnClick.bind(this);
	}

	min = Math.ceil(1);
	max = Math.floor(61);

	btnClick() {
		this.setState({randomNumber: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min});
		console.log(this.state.randomNumber)
		fetch('https://swapi.co/api/planets/'+this.state.randomNumber)
		.then((res) => res.json())
		.then((d) => {
			this.setState({data: d});
		})
	}

	componentWillMount() {
		this.setState({randomNumber: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min});
	}

	componentDidMount() {
		fetch('https://swapi.co/api/planets/'+this.state.randomNumber)
		.then((res) => res.json())
		.then((d) => {
			this.setState({data: d});
		})
	}

	render() {
		let planetData = this.state.data;
		let movieData = [this.state.data.films];
		let movieCount = movieData.length - 1;
		return (
			<div className="wrapper">
				<div className="innerContent">
					<Header planetName={planetData.name} />
					<Datalist planetPop={planetData.population} planetClimate={planetData.climate} planetTerrain={planetData.terrain} />
					<Moviedata planetFilms={movieCount}/>
				</div>
				<div className="btn-wrapper">
					<Button btnClick={this.btnClick} dataAPI={this.dataAPI}/>
				</div>
			</div>
		);
	}
}

export default Wrapper;