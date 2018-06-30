import React from 'react';

export default function WeeklyCalender (props) {
	return (
		 <div className="wrapper">
			<div>
				<h2>VECKOÖVERSIKT</h2>
			</div>
			{props.children}
		 </div>
	)
}