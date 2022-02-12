function mostrarTodaLaLista(){
    
    if(localStorage.getItem('nombreList') != null && localStorage.getItem('nombreList') != '[]'){
        const ul = document.getElementById('linkList');
        ul.innerText = '';
        var datosViejos = JSON.parse(localStorage.getItem('nombreList'));
        datosViejos.forEach( item => creandoLi(item));
    }else{
            alert('No existe registro');
    } 
    
}

function mensajeEliminar(event){
    var contItem = event.target.parentNode.querySelector('div p').innerText;
    var datosViejosE = '';
    if(localStorage.getItem('nombreList') != null){
        datosViejosE = JSON.parse(localStorage.getItem('nombreList'));
        datosViejosE.splice(datosViejosE.indexOf(contItem), 1);
        localStorage.setItem("nombreList", JSON.stringify(datosViejosE));
        var li = event.target.parentNode;
        li.parentNode.remove();
    }else{
        console.log(contItem);
    }
}

function creandoLi(listItemTodo){
    const ul = document.getElementById('linkList');
    const li = document.createElement('li');
    const div = document.createElement('div');

    //botones de eliminar y hecho
    const i = document.createElement('i');
    i.setAttribute('class','eliminar');
    i.setAttribute('onclick','mensajeEliminar(event)');
    i.innerHTML = 'X';

    const ii = document.createElement('i');
    ii.setAttribute('class','done');
    //ii.setAttribute('onclick','');
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

let listItemTodo = document.querySelector('#itemListToDo');
listItemTodo.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        guardar();
    }
});


function guardar(){
    let listItemTodo = document.querySelector('#itemListToDo').value;
    listItemTodo = listItemTodo.replace("<" , '');
    listItemTodo = listItemTodo.replace(">" , '');

    //var validarItem = / /g;
    //var validarItem = /\s+/g
    var validarItem = /\s\s/;

    if (validarItem.test(listItemTodo)){
        alert('vacio');
        return;
    }

    if(listItemTodo != ''){
        if(localStorage.getItem('nombreList') == null){
            almacenar('nombreList','[]');
        }
    
        datosViejos = JSON.parse(localStorage.getItem('nombreList'));
        datosViejos.push(listItemTodo);
    
        almacenar('nombreList',JSON.stringify(datosViejos));
    
        document.querySelector('#itemListToDo').value = '';
        creandoLi(listItemTodo);
        //location.reload();
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

function hecho(event){
    console.log(event.path[1]);
}

/*
const eliminar = document.getElementsByClassName('eliminar'); //obtengo a todos
Array.from(eliminar).forEach(e => {
    e.addEventListener('click', ()=>{
        //console.log(e);
        var padre = e.parentNode.querySelector('div p');
        var contItem = padre.innerText;
        var datosViejosE = '';
        if(localStorage.getItem('nombreList') != null){
            datosViejosE = JSON.parse(localStorage.getItem('nombreList'));
            datosViejosE.splice(datosViejosE.indexOf(contItem), 1);
            localStorage.setItem("nombreList", JSON.stringify(datosViejosE));
            var li = e.parentElement;
            li.parentNode.remove();
        }else{
            console.log(contItem);
        }
        
    });

});
*/













