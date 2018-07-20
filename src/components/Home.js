import React from 'react';
import dogHeader from '../images/hund8_small.png'; 

export default function Home (props) {
	
	let date = new Date();
	let weekdays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
	let todaysWeekday = weekdays[date.getDay()];
	
	let todaysTimes = '';
	if(date.getDay() === 0){
		todaysTimes = props.sun;
	} else if(date.getDay() === 1) {
		todaysTimes = props.mon;
	} else if(date.getDay() === 2) {
		todaysTimes = props.tue;
	} else if(date.getDay() === 3) {
		todaysTimes = props.wed;
	} else if(date.getDay() === 4) {
		todaysTimes = props.thu;
	} else if(date.getDay() === 5) {
		todaysTimes = props.fri;
	} else if(date.getDay() === 6) {
		todaysTimes = props.sat;
	} 
	console.log(todaysTimes);
	let times = todaysTimes.map((time) => 
			<li className="liHome" key={time}>{time.substring(0,2) + ":" + time.substring(2)}</li>)
	
		
	
	return (
		 <div className="wrapper">
			<div className="headingHome">
				<h1>Dog reminder</h1>
			</div>
			<div className="header">
				<img className="headerImage" alt="dog" src={dogHeader} />
			</div>
			<div className="weekday">
				<div className="headingLine">
					<h2>DAGENS VÄDER</h2>
				</div>
				<div className="headingLine">
					<h2>DAGENS TIDER - {todaysWeekday.toUpperCase()}</h2>
				</div>
				<div className="homeTimes">
					<ul>{times}</ul>
					<button className="weeklyCalenderButton" onClick={props.openWeeklyCalender}>ÄNDRA TIDER</button>
				</div>
				
			</div>
		 </div>
	)
}