import React, { Component } from 'react';
import Day from './Day';
import Nav from './Nav';
import WeeklyCalender from './WeeklyCalender';
import u208 from '../images/u208.png';
import u209 from '../images/u209.png';
import u210 from '../images/u210.png';
import u211 from '../images/u211.png';
import u212 from '../images/u212.png';
import u213 from '../images/u213.png';
import u214 from '../images/u214.png';


import '../App.css';

class App extends Component {
	
	state = {
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
	updateTimeArray = (hours, dayOfWeek, day) => {
		//this.setState({timeSettingDiv: false})
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
								src={u209}
								day={"mon"}
								dayOfWeek={this.state.mon}
								timeClicked={this.state.timeClicked}
								updateTimeArray={this.updateTimeArray}
								deleteTime={this.deleteTime}
								setTimeClicked={this.setTimeClicked} />
							<Day 
								src={u210}
								day={"tue"}
								dayOfWeek={this.state.tue}
								timeClicked={this.state.timeClicked}
								updateTimeArray={this.updateTimeArray}
								deleteTime={this.deleteTime}
								setTimeClicked={this.setTimeClicked} />
							<Day 
								src={u211}
								day={"wed"}
								dayOfWeek={this.state.wed}
								timeClicked={this.state.timeClicked}
								updateTimeArray={this.updateTimeArray}
								deleteTime={this.deleteTime}
								setTimeClicked={this.setTimeClicked} />
							<Day 
								src={u212}
								day={"thu"}
								dayOfWeek={this.state.thu}
								timeClicked={this.state.timeClicked}
								updateTimeArray={this.updateTimeArray}
								deleteTime={this.deleteTime}
								setTimeClicked={this.setTimeClicked} />
							<Day 
								src={u213}
								day={"fri"}
								dayOfWeek={this.state.fri}
								timeClicked={this.state.timeClicked}
								updateTimeArray={this.updateTimeArray}
								deleteTime={this.deleteTime}
								setTimeClicked={this.setTimeClicked} />
							<Day 
								src={u214}
								day={"sat"}
								dayOfWeek={this.state.sat}
								timeClicked={this.state.timeClicked}
								updateTimeArray={this.updateTimeArray}
								deleteTime={this.deleteTime}
								setTimeClicked={this.setTimeClicked} />
							<Day 
								src={u208}
								day={"sun"}
								dayOfWeek={this.state.sun}
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
