import React, { Component } from 'react';
import './Datalist.css';

class Datalist extends Component {
	render() {
		return (
			<ul className="datalist">
				<li>
					<span className="datatype">Population: </span>
					200.000
				</li>
				<li>
					<span className="datatype">Climate: </span>
					Arid
				</li>
				<li>
					<span className="datatype">Terrain: </span>
					Desert
				</li>
			</ul>
		);
	}
}

export default Datalist;