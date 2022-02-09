

function anadirItem(){
    //definiendo llamadas
    let listItemTodo = document.querySelector('#itemListToDo');
    let listActividades = document.querySelector('#listActividades');
    const ul = document.querySelector('#linkList');

    
    //creando
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.innerHTML = listItemTodo.value;

    //añadiendo
    ul.appendChild(li);
    li.appendChild(div);

    
}

toDoList = [toDo];
const todo {
    "id" : timestamp,
    "content": string,
    completed: bool
}