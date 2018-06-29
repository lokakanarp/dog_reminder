import React, { Component } from 'react';
import TimeSet from './TimeSet';
import Nav from './Nav';
import u210 from '../images/u210.png';

import '../App.css';

class App extends Component {
	
	state = {
		timeSettingDiv: false,
		weeklyCalender: true,
		timeClicked: 0,
		mon: [0, 16]
		
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
		
		let sortedtimes = this.state.mon;
		sortedtimes.sort(function(a, b){return a-b});
		let times = sortedtimes.map((time) => 
			<li key={time} onClick={() => {
			this.setTimeClicked(time);
			this.deleteTime(time);
			this.showTimeSettingDiv();
		}}>{time}</li>)

		if (this.state.weeklyCalender) {
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
							<div className="weekdayMain">
								<div className="weekdayImg">
									<div className="circle">
										<img src={u210} alt="dog"/>
									</div>
								</div>
								<div className="weekdayTimes">
									<ul>{times}</ul>
									<div className="addButton" onClick={this.showTimeSettingDiv}>NY TID</div>
									<TimeSet timeSettingDiv={this.state.timeSettingDiv}
										 timeClicked={this.state.timeClicked}
										 updateTimeArray={this.updateTimeArray} />
								</div>
							</div>
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
