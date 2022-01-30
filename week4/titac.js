const board = document.querySelector('.board');
const td = board.querySelectorAll('td');


      
      const resetButton = document.getElementById('reset');
      const X = 'X';
      const O = 'O';

      let player = X;

      td.forEach(elemento => elemento.addEventListener('click',activaXO,false));


function activaXO(event){
    //this.classList.toggle('cambioXY',false);

     if(this.classList.toggle('cambioXY')){
        if (player === X) player = O;
        else player = X;
        console.log('verdad ' + player);

        this.textContent = player;
     }else{
        if (player === X) player = O;
        else player = X;
        console.log('falso ' + player);

        this.textContent = player;
     } 
}

let botonReset = document.querySelector('#reset');

botonReset.addEventListener('click',limpiar);

function limpiar(){
    td.forEach(elemento => {elemento.textContent = ""});
}