import React from 'react';

export default function WeekdayHeading(props){
	
		return (<div className="weekdayHeading">
			<h2>{props.day.toUpperCase()}</h2>
		</div>)
}