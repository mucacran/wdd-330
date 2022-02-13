/*****************************
This function calls all the information saved clean,
it serves to remove and update the items that are presented on the screen 
*******************************/
function limpiarTODO(){
    if(localStorage.getItem('nombreList') != null && localStorage.getItem('nombreList') != '[]'){
        const ul = document.getElementById('linkList');
        ul.innerText = '';
        var datosViejos = JSON.parse(localStorage.getItem('nombreList'));
        datosViejos.forEach( item => creandoLi(item));
    }else{
            alert('No existe registro');
    }
    showNumberTodoAndDone();
}

/*************************
 * I indicate the content to be
 * deleted and then search for
 * it in the array and delete it 
 ****************************/
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

    showNumberTodoAndDone();
}

/************************************
 * This function is activated when you click
 * on the completed task button, what it does is
 * add a completed class to it and remove the whole class 
 ***************************************/
function completada(event){
    //div.classList.toggle("mystyle");
    event.target.parentNode.classList.toggle("completada");
    event.target.parentNode.classList.toggle("todo");

    showNumberTodoAndDone();
}

/**************************************
 * This function shows all the tasks but with their respective class 
 **************************************/
function mostrarTodaLaLista(){
    const mostrarTodaLaLista = document.getElementById("mostrarTodaLaLista");
    mostrarTodaLaLista.classList.toggle('active', true);
    
    const incompletas = document.getElementById("incompletas");
    incompletas.classList.toggle('active', false);

    const completadas = document.getElementById("completadas");
    completadas.classList.toggle('active', false);

    const itemToDo = document.getElementsByClassName("itemToDo");
    for (let i = 0; i < itemToDo.length; i++) {
        itemToDo[i].parentElement.style.display = "";
    }
}

/********************************************
 * Fires when they click the completed button, shows all completed tasks 
 *****************************************/
function completadas(){
    const mostrarTodaLaLista = document.getElementById("mostrarTodaLaLista");
    mostrarTodaLaLista.classList.toggle('active', false);
    
    const incompletas = document.getElementById("incompletas");
    incompletas.classList.toggle('active', false);

    const completadas = document.getElementById("completadas");
    completadas.classList.toggle('active', true);

    const itemToDo = document.getElementsByClassName("itemToDo");
    for (let i = 0; i < itemToDo.length; i++) {
        if (itemToDo[i].classList.contains("completada")) {
        itemToDo[i].parentElement.style.display = "";
            }
        else {
            itemToDo[i].parentElement.style.display = "none";
            }
        }
}

/**********************************
 * Fires when they click the incomplete
 * task button and adds a class and replaces the styles 
 ********************************/
function incompletas(){
    const mostrarTodaLaLista = document.getElementById("mostrarTodaLaLista");
    mostrarTodaLaLista.classList.toggle('active', false);
    
    const incompletas = document.getElementById("incompletas");
    incompletas.classList.toggle('active', true);

    const completadas = document.getElementById("completadas");
    completadas.classList.toggle('active', false);

    const itemToDo = document.getElementsByClassName("itemToDo");
    for (let i = 0; i < itemToDo.length; i++) {
        if (itemToDo[i].classList.contains("todo")) {
        itemToDo[i].parentElement.style.display = "";
            }
        else {
            itemToDo[i].parentElement.style.display = "none";
            }
        }
}

/********************************
 * Create and assemble the list according to the information you have 
 ***********************************/
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
    ii.setAttribute('onclick','completada(event)');
    ii.innerHTML = 'Done';

    div.setAttribute('class','itemToDo todo');

    div.innerHTML = '<div class="contenidoList"><p>' + listItemTodo + '</p></div>';
    div.appendChild(i);
    div.appendChild(ii);
    
    

    //añadiendo
    ul.appendChild(li);
    li.appendChild(div);
}

/***********************************************
 * save with key and valor in  localstorage
 *************************************************/
function almacenar(nombre,valor){
    localStorage.setItem(nombre,valor);
}

/**********************************************
 * This function traps the enter key when it is
 * pressed inside the field to add a new item. 
 */
let listItemTodo = document.querySelector('#itemListToDo');
listItemTodo.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        guardar();
    }
});

/*********************************************
 * This function shows how many of the list
 * are ready tasks and how many tasks are missing. 
 */
function showNumberTodoAndDone(){
    const tasksLeft = document.getElementById('tasksLeft');
    const tasksToDo = document.getElementById('tasksToDo');
    const completada = document.getElementsByClassName("completada");
    const todo = document.getElementsByClassName("todo");

    tasksToDo.innerHTML = completada.length + ' ' + 'tasks ok';
    tasksLeft.innerHTML = todo.length + ' ' + 'tasks left';
}

/****************************************
 * This function is called to save
 * and filter the information correctly in the local storage 
 */
function guardar(){
    let listItemTodo = document.querySelector('#itemListToDo').value;
    listItemTodo = listItemTodo.replace("<" , '');
    listItemTodo = listItemTodo.replace(">" , '');

    //var validarItem = / /g;
    //var validarItem = /\s+/g
    var validarItem = /\s\s/;

    if (validarItem.test(listItemTodo)){
        alert('Error');
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
    showNumberTodoAndDone();
}

/***************************************
 * This function deletes everything inside localstorage 
 */
function borrarTodo(){
    localStorage.clear();
    const ul = document.getElementById('linkList');
    document.querySelector('#itemListToDo').value = '';

    ul.innerText = '';//NO ERA LO MISMO QUE PONER innerHTML
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