import React, { Component } from 'react';
import TimeSet from './TimeSet';
import WeekdayHeading from './WeekdayHeading';

class Day extends Component {
	state = {
		timeSettingDiv: false
	}

	showTimeSettingDiv = () => {
		console.log("hej");
		this.setState({timeSettingDiv: true})	
	}
	closeTimeSettingDiv = () => {
		this.setState({timeSettingDiv: false})
	}
	
	render () {
		let sortedtimes = this.props.dayOfWeek;
		sortedtimes.sort(function(a, b){return a-b});
		let times = sortedtimes.map((time) => 
			<li key={time} onClick={() => {
			this.props.setTimeClicked(time);
			this.props.deleteTime(time, this.props.dayOfWeek);
			this.showTimeSettingDiv();
		}}>{time}</li>)
		return (
		<div className="weekday">
			<WeekdayHeading day={this.props.day} />
			<div className="weekdayMain">
				<div className="weekdayImg">
					<div className="circle">
						<img className="images" src={this.props.src} alt="dog"/>
					</div>
				</div>
				<div className="weekdayTimes">
					<ul>{times}</ul> 
					<div className="addButton" onClick={this.showTimeSettingDiv}>NY TID</div>
					<TimeSet 
						day={this.props.day}
						 timeSettingDiv={this.state.timeSettingDiv}
						 timeClicked={this.props.timeClicked}
						 updateTimeArray={this.props.updateTimeArray}
						 dayOfWeek={this.props.dayOfWeek}
						 closeTimeSettingDiv={this.closeTimeSettingDiv}/>
				</div>
			</div>
		</div>)
	}
}
export default Day;