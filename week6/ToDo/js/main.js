if(localStorage.getItem('nombreList') != null){
    var datosViejos = JSON.parse(localStorage.getItem('nombreList'));
    datosViejos.forEach( item => (){ var le = '';});
}


function anadirItem(listItemTodo,datosViejos){
    //definiendo llamadas
    //let listItemTodo = document.querySelector('#itemListToDo');
    let listActividades = document.querySelector('#listActividades');
    const ul = document.querySelector('#linkList');


    
    //creando
    const li = document.createElement('li');
    const div = document.createElement('div');
    //contenido = listItemTodo.value
    div.innerHTML = listItemTodo;

    //añadiendo
    ul.appendChild(li);
    li.appendChild(div);

    
}

/*
toDoList = [toDo];
const todo = {
    "id" : timestamp,
    "content": string,
    "completed": bool
}
*/

function almacenar(nombre,valor){
    localStorage.setItem(nombre,valor);
}



function guardar(){
    let listItemTodo = document.querySelector('#itemListToDo').value;

    if(localStorage.getItem('nombreList') == null){
        almacenar('nombreList','[]');
    }

    datosViejos = JSON.parse(localStorage.getItem('nombreList'));
    datosViejos.push(listItemTodo);

    almacenar('nombreList',JSON.stringify(datosViejos));


    anadirItem(listItemTodo,datosViejos);
}

//https://www.youtube.com/watch?v=2hJ1rTANVnk
//https://www.youtube.com/watch?v=UHaWGC5HCqI