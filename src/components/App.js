import React, { Component } from 'react';
import TimeSet from './TimeSet';

import '../App.css';

class App extends Component {
	
	state = {
		timeSettingDiv: false,
		timeClicked: 0,
		mon: [8, 16]
		
	}
	setTimeClicked = (time) => {
		this.setState({timeClicked: time})
	}
	deleteTime = (timeToDelete) => {
		this.setState({mon: this.state.mon.filter((time) => time !== timeToDelete)});
	}
	showTimeSettingDiv = () => {
		this.setState({timeSettingDiv: true})	
	}
	
	updateTimeArray = (hours) => {
		this.setState({timeSettingDiv: false})
		let newHours = this.state.timeClicked + hours;
		if(this.state.mon.find((time) => time === newHours)) {
			console.log("duplicate!")
		}
		else {
			this.setState({mon: this.state.mon.concat([newHours])})
		}
		this.setState({timeClicked: 0});
	}

	render() {
		if (this.state.mon) {
			let sortedtimes = this.state.mon;
			sortedtimes.sort(function(a, b){return a-b});
			let times = sortedtimes.map((time) => <li key={time} onClick={() => {
				this.setTimeClicked(time);
				this.deleteTime(time);
				this.showTimeSettingDiv();
			}}>{time}</li>)
			return (
			  <div className="wrapper">
				<div className="monday">
					<h2>Måndag</h2>
					<ul>{times}</ul>
					<button onClick={this.showTimeSettingDiv}>New time</button>
					<TimeSet timeSettingDiv={this.state.timeSettingDiv}
						 timeClicked={this.state.timeClicked}
						 updateTimeArray={this.updateTimeArray} />
				</div>
			  </div>
			)
  		} 
		return (<p>you don´t have time</p>)
			}	
		}

export default App;
