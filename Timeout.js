function Timeout(){
	return(
			setTimeout(() => {
				let screen = document.querySelector(".screen");
				screen.style.display = "block";
				let navbar = document.querySelector(".navbar");
				navbar.style.display = "block";
				let spinner = document.querySelector(".spinner");
				spinner.style.display = "none";
			}, 2000)
		)
}

export default Timeout;
