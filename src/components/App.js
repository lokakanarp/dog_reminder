import React, { Component } from 'react';
import Day from './Day';
import Nav from './Nav';
import WeeklyCalender from './WeeklyCalender';
import Home from './Home';
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
		weeklyCalender: false,
		home: true,
		timeClicked: 0,
		minClicked: 0,
		mon: ["1630"],
		tue: ["08"],
		wed: [],
		thu: [],
		fri: [],
		sat: [],
		sun: []
	}
	openWeeklyCalender = () => {
		this.setState({weeklyCalender: true, home: false});
	}
	openHome = () => {
		this.setState({home: true, weeklyCalender: false});
	}
	setTimeClicked = (time) => {
		let first = time.substring(0,2);
		let second = time.substring(2);
		let intTime = parseInt(first, 10);
		let intMin = parseInt(second, 10);
		this.setState({timeClicked: intTime, minClicked: intMin});
	}
	deleteTime = (timeToDelete, dayOfWeek) => {
		if(dayOfWeek === this.state.mon){
			this.setState({mon: this.state.mon.filter((time) => time !== timeToDelete)});
		} else if(dayOfWeek === this.state.tue){
			this.setState({tue: this.state.tue.filter((time) => time !== timeToDelete)});
		} else if(dayOfWeek === this.state.wed){
			this.setState({wed: this.state.wed.filter((time) => time !== timeToDelete)});
		} else if(dayOfWeek === this.state.thu){
			this.setState({thu: this.state.thu.filter((time) => time !== timeToDelete)});
		} else if(dayOfWeek === this.state.fri){
			this.setState({fri: this.state.fri.filter((time) => time !== timeToDelete)});
		} else if(dayOfWeek === this.state.sat){
			this.setState({sat: this.state.sat.filter((time) => time !== timeToDelete)});
		} else if(dayOfWeek === this.state.sun){
			this.setState({sun: this.state.sun.filter((time) => time !== timeToDelete)});
		}
	}
	updateTimeArray = (hours, min, dayOfWeek) => {
		let newHours = this.state.timeClicked + hours;
		let newMin = this.state.minClicked + min;
		newHours = newHours.toString();
		newHours = newHours.padStart(2, "0");
		newMin = newMin.toString();
		newMin = newMin.padStart(2, "0");
		newHours = newHours + newMin;
		if(dayOfWeek === this.state.mon) {
			if(dayOfWeek.find((time) => time === newHours)) {
				console.log("gulp")
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
				this.setState({fri: dayOfWeek.concat([newHours])})
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
					<Nav openHome={this.openHome}/>
					  <WeeklyCalender>
							<Day 
								src={u209}
								day={"Måndag"}
								dayOfWeek={this.state.mon}
								timeClicked={this.state.timeClicked}
								minClicked={this.state.minClicked}
								updateTimeArray={this.updateTimeArray}
								deleteTime={this.deleteTime}
								setTimeClicked={this.setTimeClicked} />
							<Day 
								src={u210}
								day={"Tisdag"}
								dayOfWeek={this.state.tue}
								timeClicked={this.state.timeClicked}
								minClicked={this.state.minClicked}
								updateTimeArray={this.updateTimeArray}
								deleteTime={this.deleteTime}
								setTimeClicked={this.setTimeClicked} />
							<Day 
								src={u211}
								day={"Onsdag"}
								dayOfWeek={this.state.wed}
								timeClicked={this.state.timeClicked}
								minClicked={this.state.minClicked}
								updateTimeArray={this.updateTimeArray}
								deleteTime={this.deleteTime}
								setTimeClicked={this.setTimeClicked} />
							<Day 
								src={u212}
								day={"Torsdag"}
								dayOfWeek={this.state.thu}
								timeClicked={this.state.timeClicked}
								minClicked={this.state.minClicked}
								updateTimeArray={this.updateTimeArray}
								deleteTime={this.deleteTime}
								setTimeClicked={this.setTimeClicked} />
							<Day 
								src={u213}
								day={"Fredag"}
								dayOfWeek={this.state.fri}
								timeClicked={this.state.timeClicked}
								minClicked={this.state.minClicked}
								updateTimeArray={this.updateTimeArray}
								deleteTime={this.deleteTime}
								setTimeClicked={this.setTimeClicked} />
							<Day 
								src={u214}
								day={"Lördag"}
								dayOfWeek={this.state.sat}
								timeClicked={this.state.timeClicked}
								minClicked={this.state.minClicked}
								updateTimeArray={this.updateTimeArray}
								deleteTime={this.deleteTime}
								setTimeClicked={this.setTimeClicked} />
							<Day 
								src={u208}
								day={"Söndag"}
								dayOfWeek={this.state.sun}
								timeClicked={this.state.timeClicked}
								minClicked={this.state.minClicked}
								updateTimeArray={this.updateTimeArray}
								deleteTime={this.deleteTime}
								setTimeClicked={this.setTimeClicked} />
					  </WeeklyCalender>
				</div>
			)
  		} 
		else if (this.state.home) {
			
			return (
				<div>
					<Nav />
					<Home openWeeklyCalender={this.openWeeklyCalender} 
						mon={this.state.mon}
						tue={this.state.tue}
						wed={this.state.wed}
						thu={this.state.thu}
						fri={this.state.fri}
						sat={this.state.sat}
						sun={this.state.sun}/>
				</div>
				)
			}
		}	
	}

export default App;
