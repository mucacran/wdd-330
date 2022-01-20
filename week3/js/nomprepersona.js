function apellido(){
    let nombre = document.querySelector('#apellido').value;
    return nombre;
}

function edad(){
    let edad = document.querySelector('#edad').value;
    return edad;
}

let persona = {
    nombre(){
    let nombre = document.querySelector('#nombre').value;
        return nombre;
    },
    apellido : apellido,
    edad : edad
}

function imprimirNOmbre(){
    let personaImpresa = persona.nombre()  + ' ' + persona.edad();
    document.querySelector('#puesto').innerHTML = personaImpresa;
}