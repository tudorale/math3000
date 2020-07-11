import React, {Component } from "react";
import {evaluate } from 'mathjs'
import "./style.css";


class Calculator extends Component{
	constructor(props){
		super(props)
		this.state = {
			syntax: '@math3000',
			placeHolder: 'math expression',
			calculatorInput: '',
		}
	}

	handleCalculator(e){
		this.setState({calculatorInput: e.target.value})

	}
	handleCalculatorSubmit(e){
		e.preventDefault();
		let value = evaluate(this.state.calculatorInput);
		this.setState({value})
		console.log(value);

		if (value === undefined) {
		document.querySelector('.error').style.display = "block"
		document.querySelector('.result').style.display = "none";
		}else if(value === 69) {
		 document.querySelector(".calculatorInput").readOnly = true;
		 document.querySelector('.exit').style.display = "block";
		 setTimeout(() => {
				document.querySelector(".limit").style.display = "block";
				document.querySelector(".limit").innerHTML = "No access";
		}, 1000)
		}else{
		document.querySelector('.error').style.display = "none"
		document.querySelector('.result').style.display = "block";

		}
	}
	render(){
		return (
			<>
				<div className="main-calculator">
					<h4>{this.props.math}@math3000<span className="add">:</span><span className="add1">~</span><span className="add2">$</span> </h4>
				 	<form onSubmit={(e) => this.handleCalculatorSubmit(e)}>
				 		<input type="text" placeholder={this.state.placeHolder} className="calculatorInput" onChange={(e) => this.handleCalculator(e)}/>
				 	</form>
				</div>
				<p className="error">please enter something in there</p>
				<p className="result">Your result is: <span>{this.state.value}</span></p>
				<p className="exit">successful exit from calculator and disabled access</p>
			</>
		)
	}
}


export default Calculator;