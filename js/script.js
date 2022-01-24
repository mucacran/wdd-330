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
    //event.target.classList.toggle("mystyle");

    //event.target.parentElement.classList.toggle("mystyle");

    var divs = event.target.parentElement;
    var div = divs.querySelector('.p.bg-amarillo.c-gris.border.rounded');
    /*div.classList.forEach(elemento => {
      if(elemento == 'd-none'){
        div.classList.remove('d-none');
        div.classList.add('mystyle')
      }else{
        
        div.classList.toggle("d-none");
      }
    }

    );*/
    div.classList.toggle("d-none");
    if(div.classList.toggle("d-none")){
        console.log('aqui dio ' + div.classList.toggle("d-none"));
        div.classList.remove('mystyle');
    }else{
      console.log('aqui dio ' + div.classList.toggle("d-none"));
      
      div.classList.add('mystyle');
    }

  }


  //addEventListener