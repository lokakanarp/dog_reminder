import React, { Component } from 'react';
import arrow_up from '../images/arrow_up.png';
import arrow_down from '../images/arrow_down.png';

class TimeSet extends Component {
	state = {
		hours: 0,
		min: 0
		}
	
	addingHours = () => {
		if(this.state.hours + this.props.timeClicked < 23){
			this.setState({hours: this.state.hours + 1});
		}	
	}
	addingMinutes = () => {
		if(this.state.min + this.props.timeClicked < 59){
			this.setState({min: this.state.min + 1});
		}	
	}
	subtractingHours = () => {
		if(this.state.hours + this.props.timeClicked > 0)
		this.setState({hours: this.state.hours - 1})
	}
	subtractingMinutes = () => {
		if(this.state.min + this.props.timeClicked > 0)
		this.setState({min: this.state.min - 1})
	}

	handleSubmit = () => {
	  		this.props.updateTimeArray(this.state.hours, this.state.min, this.props.dayOfWeek);
			this.setState({hours: 0, min: 0})
	}

	render() {
			if (this.props.timeSettingDiv) {
			return (<div className="timeSetDiv">
						<h3>Ställ in en påminnelsetid för {this.props.day}.</h3>
						<div className="arrowsUp">
							<div className="arrow">
								<img onClick={this.addingHours} src={arrow_up} alt="arrow"/>
							</div>
							<div className="arrow">
								<img onClick={this.addingMinutes} src={arrow_up} alt="arrow"/>
							</div>
						</div>
						
						
						<h3>{this.props.timeClicked + this.state.hours}:{this.props.minClicked + this.state.min}</h3>
						<div className="arrowsUp">
							<div className="arrow">
								<img onClick={this.subtractingHours} src={arrow_down} alt="arrow"/>
							</div>
							<div className="arrow">
								<img onClick={this.subtractingMinutes} src={arrow_down} alt="arrow"/>
							</div>
						</div>
						
						<button className="timeSetDivRemoveButton" onClick={this.props.closeTimeSettingDiv}>TA BORT TID</button>
						<button className="timeSetDivButton" onClick={() => {this.handleSubmit(); this.props.closeTimeSettingDiv();}}>KLAR</button>
					</div>);
		  }
		return null;
	}
}

export default TimeSet;