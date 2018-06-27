import React, { Component } from 'react';

class Login extends Component {
	state = {
		hours: 0,
		min: 0
		}
	
	componentDidMount(){
		this.setState({hours: this.state.hours + this.props.timeClicked});
	}
	
	addingHours = () => {
		if(this.state.hours < 24){
			this.setState({hours: this.state.hours + 1});
		}	
	}
	subtractingHours = () => {
		if(this.state.hours > 0)
		this.setState({hours: this.state.hours - 1})
	}

	handleSubmit = () => {
	  		this.props.updateTimeArray(this.state.hours, this.state.min);
	}

	render() {
			if (this.props.timeSettingDiv) {
			return (<div>
					<p onClick={this.addingHours}>plus</p>
				
					<p onClick={this.subtractingHours}>minus</p>
					<h3>{this.props.timeClicked + this.state.hours}</h3>
					<button onClick={this.handleSubmit}>skicka</button>
					</div>);
		  }
		return null;
	}
}

export default Login;