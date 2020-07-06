import React, {Component} from "react";
import "./style.css"

class Time extends Component{
	state = {
		date: new Date()
	};
	callMe(){
		setInterval(() => {
			this.setState({
				date: new Date()
			});
		}, 1000)
	}
	render(){
		return(
			<div>
				<p className="time">{this.state.date.toLocaleTimeString()} </p>,
				{this.callMe()}
			</div>
		)
	}
}

export default Time;