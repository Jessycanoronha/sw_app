import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<h1>{this.props.planetName}</h1>
			</div>
		);
	}
}

export default Header;