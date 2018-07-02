import React, { Component } from 'react';

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
	  		this.props.updateTimeArray(this.state.hours, this.props.dayOfWeek);
			this.setState({hours: 0, min: 0})
	}

	render() {
			if (this.props.timeSettingDiv) {
			return (<div className="timeSetDiv">
						<h3>Ställ in en tid för påminnelse för {this.props.day}.</h3>
						<p onClick={this.addingHours}>timmar plus</p>
						<p onClick={this.addingMinutes}>minuter plus</p>
						<h3>{this.props.timeClicked + this.state.hours}</h3>
						<p onClick={this.subtractingHours}>timmar minus</p>
						<p onClick={this.subtractingMinutes}>minuter minus</p>
						<button className="timeSetDivRemoveButton" onClick={this.props.closeTimeSettingDiv}>TA BORT TID</button>
						<button className="timeSetDivButton" onClick={() => {this.handleSubmit(); this.props.closeTimeSettingDiv();}}>KLAR</button>
					</div>);
		  }
		return null;
	}
}

export default TimeSet;