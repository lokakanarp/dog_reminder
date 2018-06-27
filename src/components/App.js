import React, { Component } from 'react';
import TimeSet from './TimeSet';

import '../App.css';

class App extends Component {
	
	state = {
		timeSettingDiv: false,
		//newTime: 0,
		timeClicked: 0,
		mon: [8, 16]
		
	}

	showTimeSettingDiv = () => {
		this.setState({timeSettingDiv: true})	
	}
	setTimeClicked = (time) => {
		this.setState({timeClicked: time})
	}
	updateTimeArray = (hours, min) => {
		let newHours = this.state.timeClicked + hours;
		this.setState({mon: this.state.mon.concat([newHours])})
	}

	render() {
		if (this.state.mon) {
			let times = this.state.mon.map((time) => <li key={time} onClick={() => {
				this.setTimeClicked(time);
				this.showTimeSettingDiv();
			}}>{time}</li>)
			return (
			  <div>
				<h2>Måndag</h2>
				<ul>{times}</ul>
				<TimeSet timeSettingDiv={this.state.timeSettingDiv}
						 timeClicked={this.state.timeClicked}
						 updateTimeArray={this.updateTimeArray} />
			  </div>
			)
  		} 
		return (<p>you don´t have time</p>)
			}	
		}

export default App;
