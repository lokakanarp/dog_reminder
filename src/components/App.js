import React, { Component } from 'react';
import TimeSet from './TimeSet';

import '../App.css';

class App extends Component {
	
	state = {
		timeSettingDiv: false,
		timeSetting: 0,
		mon: [800, 1600]
	}

	showTimeSettingDiv = () => {
		this.setState({timeSettingDiv: true})
	}

	render() {
		if (this.state.mon) {
			let times = this.state.mon.map((time) => <li key={time} onClick={this.showTimeSettingDiv}>{time}</li>)
			return (
			  <div>
				<h2>Måndag</h2>
				<ul>{times}</ul>
				<TimeSet timeSettingDiv={this.state.timeSettingDiv}
						 timeSetting={this.state.timeSetting}/>
			  </div>
			)
  		} 
		return (<p>you don´t have time</p>)
			}	
		}

export default App;
