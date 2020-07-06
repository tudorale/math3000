

function Timeout(){
  return (

          setTimeout(() => {
              let screen = document.querySelector(".screen");
              screen.style.display = "block";
              let navbar = document.querySelector(".navbar");
              navbar.style.display = "block"
              let loading = document.querySelector(".spinner");
              loading.style.display = "none";
        }, 3000)
    )

  
}



export default Timeout;
