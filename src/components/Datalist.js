import React, { Component } from 'react';
import '../css/Datalist.css';

class Datalist extends Component {
	render() {
		let popConvert = parseInt(this.props.planetPop, 10).toLocaleString()
		return (
			<ul className="datalist">
				<li>
					<span className="datatype">Population: </span>
					{popConvert}
				</li>
				<li>
					<span className="datatype">Climate: </span>
					{this.props.planetClimate}
				</li>
				<li>
					<span className="datatype">Terrain: </span>
					{this.props.planetTerrain}
				</li>
			</ul>
		);
	}
}

export default Datalist;