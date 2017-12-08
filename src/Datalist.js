import React, { Component } from 'react';
import './Datalist.css';

class Datalist extends Component {
	render() {
		return (
			<ul class="datalist">
				<li>
					<span class="datatype">Population: </span>
					200.000
				</li>
				<li>
					<span class="datatype">Climate: </span>
					Arid
				</li>
				<li>
					<span class="datatype">Terrain: </span>
					Desert
				</li>
			</ul>
		);
	}
}

export default Datalist;