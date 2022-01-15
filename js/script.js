/*function myFunctionToggle() {
    var element = document.querySelector(".botonMostrar");
    element.classList.toggle("mystyle");
  }*/


    var element = document.querySelectorAll(".botonMostrar");
    //element.forEach(element => element.addEventListener('click',activaMostrar('this')));
    element.forEach(elemento => elemento.addEventListener('click',activaMostrar));

  function activaMostrar(event){
    //console.log(event.target);
    //event.target.style.backgroundColor = "red";
    event.target.classList.toggle("mystyle");
  }


  //addEventListener