if(localStorage.getItem('nombreList') != null){
    var datosViejos = JSON.parse(localStorage.getItem('nombreList'));
    datosViejos.forEach( item => creandoLi(item));
}else{
    var datosViejos = '';
}


function creandoLi(listItemTodo){
    const ul = document.getElementById('linkList');
    const li = document.createElement('li');
    const div = document.createElement('div');

    const i = document.createElement('i');
    i.setAttribute('class','eliminar');
    i.setAttribute('onclick','eliminar(event)');
    i.innerHTML = 'X';

    const ii = document.createElement('i');
    ii.setAttribute('class','done');
    ii.setAttribute('onclick','hecho(event)');
    ii.innerHTML = 'Done';

    
    div.innerHTML = '<div class="contenidoList"><p>' + listItemTodo + '</p></div>';
    div.appendChild(i);
    div.appendChild(ii);
    
    

    //añadiendo
    ul.appendChild(li);
    li.appendChild(div);
}

function almacenar(nombre,valor){
    localStorage.setItem(nombre,valor);
}



function guardar(){
    let listItemTodo = document.querySelector('#itemListToDo').value;

    if(listItemTodo != ''){
        if(localStorage.getItem('nombreList') == null){
            almacenar('nombreList','[]');
        }
    
        datosViejos = JSON.parse(localStorage.getItem('nombreList'));
        datosViejos.push(listItemTodo);
    
        almacenar('nombreList',JSON.stringify(datosViejos));
    
    
        creandoLi(listItemTodo);
    }
    else{
        alert('Error: llene el campo antes de hacer click');
    }

    
}

function borrarTodo(){
    localStorage.clear();
    const ul = document.getElementById('linkList');
    document.querySelector('#itemListToDo').value = '';

    ul.innerText = '';//NO ERA LO MISMO QUE PONER innerHTML
}

function eliminar(event){
    let div = event.path[1].querySelector('div > p');
    console.log(div.innerText);

    
}

function hecho(event){
    console.log(event.path[1]);
}

//https://www.youtube.com/watch?v=2hJ1rTANVnk
//https://www.youtube.com/watch?v=UHaWGC5HCqI