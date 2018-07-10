import React from 'react';
import dogHeader from '../images/hund8_small.png'; 

export default function Home (props) {
	
		let date = new Date();
		let weekdays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
		let todaysWeekday = weekdays[date.getDay()];
	
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
					<h2>DAGENS TIDER</h2>
				</div>
				<div className="homeTimes">
					<p>{todaysWeekday}</p>
					<ul><li>hej</li></ul>
					<button className="weeklyCalenderButton" onClick={props.openWeeklyCalender}>ÄNDRA TIDER</button>
				</div>
				
			</div>
		 </div>
	)
}