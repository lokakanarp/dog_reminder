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
		mon: [0, 16],
		tue: [],
		wed: [],
		thu: [],
		fri: [],
		sat: [],
		sun: []	
	}
	setTimeClicked = (time) => {
		this.setState({timeClicked: time});
	}
	deleteTime = (timeToDelete, dayOfWeek) => {
		this.setState({mon: this.state.mon.filter((time) => time !== timeToDelete)});
	}
	showTimeSettingDiv = () => {
		this.setState({timeSettingDiv: true})	
	}
	updateTimeArray = (hours, dayOfWeek, day) => {
		this.setState({timeSettingDiv: false})
		let newHours = this.state.timeClicked + hours;
		if(dayOfWeek === this.state.mon) {
			if(dayOfWeek.find((time) => time === newHours)) {
				console.log("duplicate!")
			}
			else {
				this.setState({mon: dayOfWeek.concat([newHours])})
			}
		}
		else if(dayOfWeek === this.state.tue) {
			if(dayOfWeek.find((time) => time === newHours)) {
				console.log("duplicate!")
			}
			else {
				this.setState({tue: dayOfWeek.concat([newHours])})
			}
		}
		else if(dayOfWeek === this.state.wed) {
			if(dayOfWeek.find((time) => time === newHours)) {
				console.log("duplicate!")
			}
			else {
				this.setState({wed: dayOfWeek.concat([newHours])})
			}
		}
		else if(dayOfWeek === this.state.thu) {
			if(dayOfWeek.find((time) => time === newHours)) {
				console.log("duplicate!")
			}
			else {
				this.setState({thu: dayOfWeek.concat([newHours])})
			}
		}
		else if(dayOfWeek === this.state.fri) {
			if(dayOfWeek.find((time) => time === newHours)) {
				console.log("duplicate!")
			}
			else {
				this.setState({tue: dayOfWeek.concat([newHours])})
			}
		}
		else if(dayOfWeek === this.state.sat) {
			if(dayOfWeek.find((time) => time === newHours)) {
				console.log("duplicate!")
			}
			else {
				this.setState({sat: dayOfWeek.concat([newHours])})
			}
		}
		else if(dayOfWeek === this.state.sun) {
			if(dayOfWeek.find((time) => time === newHours)) {
				console.log("duplicate!")
			}
			else {
				this.setState({sun: dayOfWeek.concat([newHours])})
			}
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
								day={"mon"}
								dayOfWeek={this.state.mon}
								showTimeSettingDiv={this.showTimeSettingDiv}
								timeSettingDiv={this.state.timeSettingDiv}
								timeClicked={this.state.timeClicked}
								updateTimeArray={this.updateTimeArray}
								deleteTime={this.deleteTime}
								setTimeClicked={this.setTimeClicked} />
							<Day 
								day={"tue"}
								dayOfWeek={this.state.tue}
								showTimeSettingDiv={this.showTimeSettingDiv}
								timeSettingDiv={this.state.timeSettingDiv}
								timeClicked={this.state.timeClicked}
								updateTimeArray={this.updateTimeArray}
								deleteTime={this.deleteTime}
								setTimeClicked={this.setTimeClicked} />
							<Day 
								day={"wed"}
								dayOfWeek={this.state.wed}
								showTimeSettingDiv={this.showTimeSettingDiv}
								timeSettingDiv={this.state.timeSettingDiv}
								timeClicked={this.state.timeClicked}
								updateTimeArray={this.updateTimeArray}
								deleteTime={this.deleteTime}
								setTimeClicked={this.setTimeClicked} />
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
