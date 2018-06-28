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
	setTimeClicked = (time) => {
		this.setState({timeClicked: time})
	}
	showTimeSettingDiv = () => {
		this.setState({timeSettingDiv: true})	
	}
	deleteTime = (timeToDelete) => {
		
		this.setState({mon: this.state.mon.filter((time) => time !== timeToDelete)});
	}
	updateTimeArray = (hours, min) => {
		let newHours = this.state.timeClicked + hours;
		if(this.state.mon.find((time) => time === newHours)) {
			console.log("duplicate!")
		}
		else {
			this.setState({mon: this.state.mon.concat([newHours])})
		}
	}

	render() {
		if (this.state.mon) {
			let times = this.state.mon.map((time) => <li key={time} onClick={() => {
				this.setTimeClicked(time);
				this.deleteTime(time);
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
