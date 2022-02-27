const url = 'https://swapi.dev/api/people';
/*
fetch(url)
.then((response) => {
    if(response.ok) {
        response.text();
        return response;
    }
    throw Error(response.statusText);
}).then(text => 
    console.log(text)
)
.catch( error => console.log('There was an error!') )*/

//pata texto
/*
fetch(url)
.then( response => response.text() )
.then( text => console.log(text) )
.catch( error => console.log('There was an error: ', error))
*/

//pata JSON
 const personas = document.getElementById('personas');
 var previous = document.querySelector('#previous');
 var next = document.querySelector('#next');

fetch(url)
.then(
    (response) => {
        if(!response.ok) {
            throw Error(response.statusText);
            //console.log(response.statusText);
        }else{
            return response;
        }
    }
)
.then(response => response.json())
.then(
    data => {
        //console.log(Object.entries(data));
        printPersons(data);
    }
)
.catch( error => console.log('There was an error: ', error));

//previous.addEventListener('click',nextANDprevi(event));

function nextANDprevi(event){
    
    var url = event.target.getAttribute("data-url");

    if(url == null){
        event.target.style.display = 'none';
    }else{
        consegirJson(url);
        personas.innerHTML = '';
    }
}

function printPersons(data){
    var i = 0;
    const ul = document.createElement('ul');
    personas.appendChild(ul);
    console.log(data);
    data.results.forEach(
        personass => {
            
            const li = document.createElement('li');
            li.innerHTML = `
            <div id="cont-${i}">
                <span style="width:200px;display:inline-block">${personass.name}</span>
                <button onclick="completada(event)"> View</button>
                
                <div class="d-none mb-15px" id="ver-${i}">
                    <ul class="mb-15px">  
                        <li>height: ${personass.height}</li>
                        <li>mass: ${personass.mass}</li>
                        <li>hair_color: ${personass.hair_color}</li>
                        <li>skin_color: ${personass.skin_color}</li>
                        <li>eye_color: ${personass.eye_color}</li>
                        <li>birth_year: ${personass.birth_year}</li>
                        <li>gender: ${personass.gender}</li>
                        <li>homeworld: ${personass.homeworld}</li>
                    </ul>
                    <hr>
                </div>
                
            </div>
                `;
            ul.appendChild(li);
            i++;
            //botones
        }
    );
    if(!(data.previous == null)){
        previous.dataset.url = data.previous;
        previous.style.display = 'inline-block';
    }else{
        previous.style.display = 'none';
    }
    if(!(data.next == null)){
        next.dataset.url = data.next;
        next.style.display = 'inline-block';
    }else{
        next.style.display = 'none';
    }
    /*
    previous.dataset.url = data.previous;
    next.dataset.url = data.next;*/
    console.log(data.next);
    console.log(data.previous);
}

function consegirJson(url){
    fetch(url)
        .then(res => res.json())
        .then(data =>{
            printPersons(data);
        })
}

function completada(event){

    var uno = event.currentTarget.parentNode;
    var dos = uno.querySelector('div');

    dos.classList.toggle("d-block");
    dos.classList.toggle("d-none");
    
}