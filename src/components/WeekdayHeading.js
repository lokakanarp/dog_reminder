import React from 'react';

export default function WeekdayHeading(props){
	if (props.day === "mon") {
		return (<div className="weekdayHeading">
			<h2>MÅNDAG</h2>
		</div>)
	  }
  	if (props.day === "tue") {
		return (<div className="weekdayHeading">
			<h2>TISDAG</h2>
		</div>)
	  }
	if (props.day === "wed") {
		return (<div className="weekdayHeading">
			<h2>ONSDAG</h2>
		</div>)
	  }
	if (props.day === "thu") {
	return (<div className="weekdayHeading">
		<h2>TORSDAG</h2>
	</div>)
  	}
	if (props.day === "fri") {
	return (<div className="weekdayHeading">
		<h2>FREDAG</h2>
	</div>)
    }
	if (props.day === "sat") {
	return (<div className="weekdayHeading">
		<h2>LÖRDAG</h2>
	</div>)
    }
	if (props.day === "sun") {
	return (<div className="weekdayHeading">
		<h2>SÖN</h2>
	</div>)
    }
}