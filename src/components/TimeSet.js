import React from 'react';


export default function TimeSet (props) {
	if (props.timeSettingDiv) {
		return (<div>
				<h3>{props.timeSetting}</h3>
				
				</div>);
	  }
 	return null;
}