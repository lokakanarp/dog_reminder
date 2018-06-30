import React, { Component } from 'react';
import Day from './Day';
import Nav from './Nav';
import WeeklyCalender from './WeeklyCalender';


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
	updateTimeArray = (hours, dayOfWeek, day) => {
		this.setState({timeSettingDiv: false})
		let newHours = this.state.timeClicked + hours;
		if(dayOfWeek.find((time) => time === newHours)) {
			console.log("duplicate!")
		}
		else {
			this.setState({mon: dayOfWeek.concat([newHours])})
		}
		this.setState({timeClicked: 0});
	}
	render() {
		
		

		if (this.state.weeklyCalender) {
			return (
				<div>
					<Nav />
					  <WeeklyCalender>
							<Day 
								
								dayOfWeek={this.state.mon}
								showTimeSettingDiv={this.showTimeSettingDiv}
								timeSettingDiv={this.state.timeSettingDiv}
								timeClicked={this.state.timeClicked}
								updateTimeArray={this.updateTimeArray} />
					  </WeeklyCalender>
				</div>
			)
  		} 
		return (
			//Det här ska ändras
			<div>
				<Nav />
					<p>you don´t have time</p>
			</div>
			)
		}	
	}

export default App;
