import React, { Component } from 'react';
import './App.css';

class Datalist extends Component {
	render() {
		return (
			<ul class="datalist">
				<li>
					<span class="datatype">População: </span>
					200.000
				</li>
			</ul>
		);
	}
}

export default Datalist;