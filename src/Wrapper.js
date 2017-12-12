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
			name: undefined,
			climate: undefined,
			terrain: undefined,
			films: undefined,
			random: null,
		};
		this.btnClick = this.btnClick.bind(this);
	}

	min = Math.ceil(1);
	max = Math.floor(61);

	btnClick() {
		this.setState({random: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min});
	};

	render() {
		return (
			<div class="wrapper">
				<div class="innerContent">
					<Header />
					<Datalist />
					<Moviedata />
				</div>
				<div class="btn-wrapper">
					<Button btnClick={this.btnClick} />
				</div>
			</div>
		);
	}
}

export default Wrapper;