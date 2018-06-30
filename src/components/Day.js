import React from 'react';
import TimeSet from './TimeSet';
import WeekdayHeading from './WeekdayHeading';
import u210 from '../images/u210.png';

export default function Nav (props) {
	let sortedtimes = props.dayOfWeek;
		sortedtimes.sort(function(a, b){return a-b});
		let times = sortedtimes.map((time) => 
			<li key={time} onClick={() => {
			props.setTimeClicked(time);
			props.deleteTime(time);
			props.showTimeSettingDiv();
		}}>{time}</li>)
	return (
	<div className="weekday">
		<WeekdayHeading day={props.day} />
		<div className="weekdayMain">
			<div className="weekdayImg">
				<div className="circle">
					<img src={u210} alt="dog"/>
				</div>
			</div>
			<div className="weekdayTimes">
				<ul>{times}</ul> 
				<div className="addButton" onClick={props.showTimeSettingDiv}>NY TID</div>
				<TimeSet timeSettingDiv={props.timeSettingDiv}
					 timeClicked={props.timeClicked}
					 updateTimeArray={props.updateTimeArray}
					
					dayOfWeek={props.dayOfWeek}/>
			</div>
		</div>
	</div>)
}