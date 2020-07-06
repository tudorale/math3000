import React, {Component} from "react";
import "./style.css"
import robot from "./robot.svg"
import Timeout from "./Timeout"
import wifi from "./wifi.svg"
import Time from "./Time"

class Background extends Component{
	constructor(props){
    super(props)

    this.state = {
      input: null,
      value: "",
    }
  }

 
  handleChange(e){
    this.setState({input: e.target.value})
    console.log(this.input)
  }

  handleSubmit(e){
    e.preventDefault()
    let value = eval(this.state.input)
    this.setState({value});

  
  }

  handleClick(){
  		return (
  			document.querySelector(".menu").style.display = "block",
  		    document.querySelector(".screen").style.display = "none"
  		)
  
  }

   handleAppear(){
  		return (
  			document.querySelector(".menu").style.display = "none",
  		    document.querySelector(".screen").style.display = "block"
  		)
  
  }



  render(){
    return(
        <div>
        	<div className="main">
        		<Timeout />
				<div className="phone">
			        <div className="menu">
			          <div className="menu-navbar">
			          	<h3>Developer</h3>
			          	<button onClick={this.handleAppear}><i className="fas arrowR fa-arrow-right"></i></button>
			          </div>
			          <p className="developed">Developed by <a href="https://tudoralexandru.netlify.app/">Tudor Alexandru</a></p>
			        </div>
					<i className="fas spinner fa-spinner"></i>
					<div className="navbar">
						<Time/>
						<img src={wifi} alt="wifi icon" className="wifi" />
					</div>
					<div className="speaker"></div>
					<button className="startbtn"></button>
					<div className="screen">
						<div className="logo"><button className="arrowBtn" onClick={this.handleClick}><i className="fas arrow fa-arrow-left"></i></button><h3>math 3000</h3></div>
						<div className="math">
							<img src={robot} className="robot" alt="robot"/>
							<div className="f1">
								<p>Hi, I am math 3000 and I will help you with math. </p>
							</div>
						</div>

						<div className="math2">
							<img src={robot} className="robot2" alt="robot"/>
							<div className="f2">
								<p>Type below some math operations to start. </p>
							</div>
						</div>

						 <div className="user">
				        	<img src={robot} className="robot" alt="robot"/>
				        	<div className="f3">
								<p>Your answer is: {this.state.value}</p>
							</div>
		        		 </div>
					

						<div className="func">
		        		  <form onSubmit={(e) => this.handleSubmit(e)}>
		          		      <input type="text" placeholder="68+1" onChange={(e) => this.handleChange(e)}/>
		                      <button>=</button>
		        		   </form>
		 
	        			</div>
	        		</div>
				</div>
			</div>
		</div>
      )
  }
}


export default Background;