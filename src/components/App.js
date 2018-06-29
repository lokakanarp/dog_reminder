import React, { Component } from 'react';
import TimeSet from './TimeSet';
import Nav from './Nav';

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
				<div>
					<Nav />
					  <div className="wrapper">
						<div>
							<h2>VECKOÖVERSIKT</h2>
						</div>
						<div className="weekday">
							<div className="weekdayHeading">
								<h2>MÅNDAG</h2>
							</div>
							<div className="circle">
							</div>
							<ul>{times}</ul>
							<button onClick={this.showTimeSettingDiv}>New time</button>
							<TimeSet timeSettingDiv={this.state.timeSettingDiv}
								 timeClicked={this.state.timeClicked}
								 updateTimeArray={this.updateTimeArray} />
						</div>
					  </div>
				</div>
			)
  		} 
		return (
			<div>
				<Nav />
					<p>you don´t have time</p>
			</div>
			)
		}	
	}

export default App;
