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
		console.log("numero resetado: "+this.state.randomNumber)
		this.setState({randomNumber: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min});
		this.fetchAPI().then(data => this.setState({data}))
	}

	async fetchAPI() {
		let request = new Request('https://swapi.co/api/planets/'+this.state.randomNumber)
		let data = await fetch(request).then(response => response.json())
		console.log(data)
		return data
	}

	componentWillMount() {
		this.setState({randomNumber: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min});
	}

	async componentDidMount() {
		this.fetchAPI().then(data => this.setState({data}))
		this.setState({randomNumber: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min});
	}

	render() {
		let planetData = this.state.data;
		let movieData = this.state.data.films || [];
		let movieArray = movieData.length;
		return (
			<div className="wrapper">
				<div className="innerContent">
					<Header planetName={planetData.name} />
					<Datalist planetPop={planetData.population} planetClimate={planetData.climate} planetTerrain={planetData.terrain} />
					<Moviedata planetFilms={movieArray}/>
				</div>
				<div className="btn-wrapper">
					<Button btnClick={this.btnClick}/>
				</div>
			</div>
		);
	}
}

export default Wrapper;