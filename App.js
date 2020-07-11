import React, { Component } from 'react';
import Calculator from "./Calculator"
import './style.css';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			syntax: 'user@home',
			input: null,
			newSyntax: '',
			placeholder: 'enter your name',
			p2: 'type help',
			commandsInput: '',
			freeInput: '',
			user: '',
			freeInput2: '',
			freeInput3: ''

		}

	}

	handleSyntaxChange(math){
    	this.setState({input: math})
  	} 

	

	handleChange(e){
		this.setState({input: e.target.value});
	}
	handleSubmit(e){
		e.preventDefault();
		let value = this.state.input;
		this.setState({user: `${value}`})
		if (value.length >= 20) {
			return ( 
				this.setState({syntax: 'user@home'}),
				this.setState({placeholder: 'enter a name under 20 characters'})
			)
		}else{
			return ( this.setState({syntax: `${value}@home`}),
				document.querySelector('.firstInput').readOnly = true,

				setTimeout(() => {
					this.handleNext();
				},500)
			)

		}
		



	}
	handleNext(){
		document.querySelector(".help").style.display = "flex";	

	}
	handleChangeCommand(e){
		this.setState({commandsInput: e.target.value})
	}
	handleCommand(e){
		e.preventDefault();
		let command = this.state.commandsInput;
		if(command === 'help' || command === 'Help' || command === 'help '){
			document.querySelector(".secondInput").readOnly = true;
			document.querySelector(".helpCommands").style.display = "block"
			document.querySelector(".free").style.display = "flex"
			document.querySelector(".thirthInput").focus();
		}else if(command === 'info' || command === 'Info' || command === 'info '){
			document.querySelector(".info").style.display = "block";
			document.querySelector(".secondInput").readOnly = true;
			document.querySelector(".free").style.display = "flex"
			document.querySelector(".thirthInput").focus();

		
		}else if(command === 'math' || command === 'Math' || command === 'math '){
			document.querySelector(".secondInput").readOnly = true;
			document.querySelector('.main-calculator').style.display = "flex";
			document.querySelector(".calculatorInput").focus();
		
		}else if(command === 'whoami' || command === 'Whoami' || command === 'whoami '){
			document.querySelector(".secondInput").readOnly = true;
			document.querySelector(".whoami").style.display = "block";
			document.querySelector(".free").style.display = "flex"
			document.querySelector(".thirthInput").focus();

		
		}else{
			document.querySelector(".unk").style.display = "block";
			setTimeout(()=>{
				document.querySelector(".unk").style.display = "none";
			}, 1200)
		}
	


	}

	handleChangeFree(e){
		this.setState({freeInput: e.target.value})
	}
	helpMenu(){
		return (
			<div className="helpMenu">
				<p><span>whoami</span> - show the username</p>
				<p><span>info</span> - about the developer & website</p>
				<p><span>math</span> - start the calculator</p>
				<p><span>69</span> - exit from calculator and disable access</p>
			</div>
		)	
	}

	handleSubmitFree(e){
		e.preventDefault();
		let freeValue = this.state.freeInput;
		if(freeValue === 'help' || freeValue === 'Help' || freeValue === 'Help '){
			document.querySelector(".secondInput").readOnly = true;
			document.querySelector(".helpMenu").style.display = "block"
			document.querySelector(".free").style.display = "flex"
			document.querySelector(".thirthInput").readOnly = true;
			this.helpMenu();
			document.querySelector(".freeInput4").style.display = "flex";
			document.querySelector(".fourInput").focus();
		}else if(freeValue === 'info' ||freeValue === 'Info' || freeValue === 'info '){
			document.querySelector(".info2").style.display = "block";
			document.querySelector(".thirthInput").readOnly = true;
			document.querySelector(".freeInput4").style.display = "flex";
			document.querySelector(".fourInput").focus();
		}else if(freeValue === 'math' || freeValue === 'Math' || freeValue === 'math '){
			document.querySelector(".thirthInput").readOnly = true;
			document.querySelector('.main-calculator').style.display = "flex";
		}else if(freeValue === 'whoami' || freeValue === 'Whoami' || freeValue === 'whoami '){
			document.querySelector(".thirthInput").readOnly = true;
			document.querySelector(".whoami2").style.display = "block";
			document.querySelector(".freeInput4").style.display = "flex";
			document.querySelector(".fourInput").focus();
		}else{
			document.querySelector(".unk").style.display = "block";
			setTimeout(()=>{
				document.querySelector(".unk").style.display = "none";
			}, 1200)
		}
	}

	handleChangeFreeFour(e){
		this.setState({freeInput2: e.target.value})

	}
	helpMenu2(){
		return (
			<div className="helpMenu2">
				<p><span>whoami</span> - show the username</p>
				<p><span>info</span> - about the developer & website</p>
				<p><span>math</span> - start the calculator</p>
				<p><span>69</span> - exit from calculator and disable access</p>
			</div>
		)	
	}
	handleSubmitFreeFour(e){
		e.preventDefault();
		let freeValueFour = this.state.freeInput2;
		if(freeValueFour === 'help' || freeValueFour === 'Help' || freeValueFour === 'Help '){
			document.querySelector(".secondInput").readOnly = true;
			document.querySelector(".helpMenu2").style.display = "block";
			this.helpMenu2();
			document.querySelector(".freeInput5").style.display = "flex";
			document.querySelector(".fiveInput").focus();

		}else if(freeValueFour === 'info' || freeValueFour === 'Info' || freeValueFour === 'info '){
			document.querySelector(".info3").style.display = "block";
			document.querySelector(".fourInput").readOnly = true;
			document.querySelector(".freeInput5").style.display = "flex";
			document.querySelector(".fiveInput").focus();
		}else if(freeValueFour === 'math' || freeValueFour === 'Math' || freeValueFour === 'math '){
			document.querySelector(".fourInput").readOnly = true;
			document.querySelector('.main-calculator').style.display = "flex";
		
		}else if(freeValueFour === 'whoami' || freeValueFour === 'Whoami' || freeValueFour === 'whoami '){
			document.querySelector(".fourInput").readOnly = true;
			document.querySelector(".whoami3").style.display = "block";
			document.querySelector(".freeInput5").style.display = "flex";
			document.querySelector(".fiveInput").focus();
		
		}else{
			document.querySelector(".unk").style.display = "block";
			setTimeout(()=>{
				document.querySelector(".unk").style.display = "none";
			}, 1200)
		}
	}

	handleChangeFreeFive(e){
		this.setState({freeInput3: e.target.value})
	}

	helpMenu3(){
		return (
			<div className="helpMenu3">
				<p><span>whoami</span> - show the username</p>
				<p><span>info</span> - about the developer & website</p>
				<p><span>math</span> - start the calculator</p>
				<p><span>69</span> - exit from calculator and disable access</p>
			</div>
		)	
	}

	handleSubmitFreeFive(e){
		e.preventDefault();
		let freeInput5 = this.state.freeInput3;

		if(freeInput5 === 'help' || freeInput5 === 'Help' || freeInput5 === 'Help '){
			this.helpMenu3();
			document.querySelector(".helpMenu3").style.display = "block";
			document.querySelector(".freeInput5").style.display = "flex";
			document.querySelector(".fiveInput").readOnly = true;

			setTimeout(() => {
				document.querySelector(".limit").style.display = "block";
			}, 1000)

		}else if(freeInput5 === 'info' || freeInput5 === 'Info' || freeInput5 === 'info '){
			document.querySelector(".info4").style.display = "block";
			document.querySelector(".fiveInput").readOnly = true;
			setTimeout(() => {
				document.querySelector(".limit").style.display = "block";
			}, 1000)
		}else if(freeInput5 === 'math' || freeInput5 === 'Math' || freeInput5 === 'math '){
			document.querySelector(".fiveInput").readOnly = true;
		    document.querySelector('.main-calculator').style.display = "flex";
		}else if(freeInput5 === 'whoami' || freeInput5 === 'Whoami' || freeInput5 === 'whoami '){
			document.querySelector(".whoami4").style.display = "block";
			document.querySelector(".fiveInput").readOnly = true;
			setTimeout(() => {
				document.querySelector(".limit").style.display = "block";
			},1000)
			
		
		}else{
			document.querySelector(".unk").style.display = "block";
			setTimeout(()=>{
				document.querySelector(".unk").style.display = "none";
			}, 1200)
		}
	}

	render(){
		return (
			<div>
				<div className="main">
					<div className="into">
				 		<p>{this.state.syntax}<span className="add">:</span><span className="add1">~</span><span className="add2">$</span> </p>
				 		<form onSubmit={(e) => this.handleSubmit(e)}>
				 			<input type="text" className="firstInput" placeholder={this.state.placeholder} onChange={(e) => this.handleChange(e)}/>
				 		</form>
				 	</div>
				 	<div className="into help">
						<p>{this.state.syntax}<span className="add">:</span><span className="add1">~</span><span className="add2">$</span> </p>
						<form onSubmit={(e) => this.handleCommand(e)}>
					 		<input type="text" placeholder={this.state.p2} onChange={(e) => this.handleChangeCommand(e)} className="secondInput"/>
						</form>
					</div>
					<p className="whoami">{this.state.user}</p>
					<div className="helpCommands">
						 		<p><span>whoami</span> - show the username</p>
						 		<p><span>info</span> - about the developer & website</p>
						 		<p><span>math</span> - start the calculator</p>
						 		<p><span>69</span> - exit from calculator and disable access</p>
					 </div>
					<div className="info">
							<p>Math 3000 is a terminal where you have various commands<br /> including the 'math' command to open a computer where you can enter any mathematical expression.</p>
							<p className="dev">Developed by Tudor Alexandru</p>
							<a href="https://tudoralexandru.netlify.app/" rel="noopener noreferrer" target='_blank'>website</a>
					</div>
					<div className="into free">
				 		<p>{this.state.syntax}<span className="add">:</span><span className="add1">~</span><span className="add2">$</span> </p>
				 		
				 		<form onSubmit={(e) => this.handleSubmitFree(e)}>
				 			<input type="text" className="thirthInput"  onChange={(e) => this.handleChangeFree(e)}/>
				 		</form>
				 		
				 	</div>
				 	<p className="whoami2">{this.state.user}</p>
				 	<div className="info2">
				 	<p>Math 3000 is a terminal where you have various commands<br /> including the 'math' command to open a computer where you can enter any mathematical expression.</p>
							<p className="dev">Developed by Tudor Alexandru</p>
							<a href="https://tudoralexandru.netlify.app/" rel="noopener noreferrer" target='_blank'>website</a>
					</div>
				 	{this.helpMenu()}
				 	<div className="into freeInput4">
				 		<p>{this.state.syntax}<span className="add">:</span><span className="add1">~</span><span className="add2">$</span> </p>
				 		<form onSubmit={(e) => this.handleSubmitFreeFour(e)}>
				 			<input type="text" className="fourInput"  onChange={(e) => this.handleChangeFreeFour(e)}/>
				 		</form>
				 		
				 	</div>
				 	<p className="whoami3">{this.state.user}</p>
				 	<div className="info3">
				 	<p>Math 3000 is a terminal where you have various commands<br /> including the 'math' command to open a computer where you can enter any mathematical expression.</p>
							<p className="dev">Developed by Tudor Alexandru</p>
							<a href="https://tudoralexandru.netlify.app/" rel="noopener noreferrer" target='_blank'>website</a>
					</div>
				 	{this.helpMenu2()}
				 	<div className="into freeInput5">
				 		<p>{this.state.syntax}<span className="add">:</span><span className="add1">~</span><span className="add2">$</span> </p>
				 		<form onSubmit={(e) => this.handleSubmitFreeFive(e)}>
				 			<input type="text" className="fiveInput"  onChange={(e) => this.handleChangeFreeFive(e)}/>
				 		</form>
				 		
				 	</div>
				 	<p className="whoami4">{this.state.user}</p>
				 	<div className="info4">
				 	<p>Math 3000 is a terminal where you have various commands<br /> including the 'math' command to open a computer where you can enter any mathematical expression.</p>
							<p className="dev">Developed by Tudor Alexandru</p>
							<a href="https://tudoralexandru.netlify.app/" rel="noopener noreferrer" target='_blank'>website</a>
					</div>
				 	{this.helpMenu3()}
				 	<Calculator math={this.state.input} handleSyntaxChange={this.handleSyntaxChange}/>
				 	<p className="unk">Command not found</p>
				 	<p className="limit">Input limit reached</p>
				</div>
			</div>
		)
		
	}


}

export default App;
