import React, { Component } from 'react';
import Header from './Header';
import Datalist from './Datalist';
import Moviedata from './Moviedata';
import Button from './Button';
import './Wrapper.css';

class Wrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: undefined,
			randomNumber: null,
		};
		this.btnClick = this.btnClick.bind(this);
	}

	min = Math.ceil(1);
	max = Math.floor(61);

	btnClick() {
		this.setState({randomNumber: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min});
	};

	componentWillMount() {
		this.setState({randomNumber: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min});
	}

	componentDidMount() {
		fetch('https://swapi.co/api/planets/'+this.state.randomNumber)
		.then((res) => res.json())
		.then((d) => {
			console.log(d)
			this.setState({
				data: d
			})
		})
	}

	render() {
		return (
			<div className="wrapper">
				<div className="innerContent">
					<Header />
					<Datalist />
					<Moviedata />
				</div>
				<div className="btn-wrapper">
					<Button btnClick={this.btnClick} />
				</div>
			</div>
		);
	}
}

export default Wrapper;