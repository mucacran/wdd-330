const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});

// formulario no validado
// Hay muchas formas de elegir un nodo DOM; aquí obtenemos el formulario y, a continuación, el campo de entrada
// del correo electrónico, así como el elemento span en el que colocaremos el mensaje de error.
const form  = document.getElementsByTagName('form')[1];

const email1 = document.getElementById('mail1');
const emailError = document.querySelector('#mail1 + span.error');

email1.addEventListener('input', function (event) {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.

  if (email1.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    emailError.innerHTML = ''; // Restablece el contenido del mensaje
    emailError.className = 'error'; // Restablece el estado visual del mensaje
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // si el campo de correo electrónico es válido, dejamos que el formulario se envíe

  if(!email1.validity.valid) {
    // Si no es así, mostramos un mensaje de error apropiado
    showError();
    // Luego evitamos que se envíe el formulario cancelando el evento
    event.preventDefault();
  }
});

function showError() {
  if(email1.validity.valueMissing) {
    // Si el campo está vacío
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'Debe introducir una dirección de correo electrónico.';
  } else if(email1.validity.typeMismatch) {
    // Si el campo no contiene una dirección de correo electrónico
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
  } else if(email1.validity.tooShort) {
    // Si los datos son demasiado cortos
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'El correo electrónico debe tener al menos ${ email.minLength } caracteres; ha introducido ${ email.value.length }.';
  }

  // Establece el estilo apropiado
  emailError.className = 'error activo';
}

// ejemplo de email2
// Hay menos formas de elegir un nodo DOM con navegadores antiguos
const form2  = document.getElementsByTagName('form')[2];
const email2 = document.getElementById('mail2');

// Lo siguiente es un truco para llegar al siguiente nodo de elementos hermanos en el DOM
// Esto es peligroso porque puedes construir fácilmente un bucle infinito.
// En los navegadores modernos es mejor usar element.nextElementSibling
let error = email2;
while ((error = error.nextSibling).nodeType != 1);

// según la especificación HTML5
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Muchos navegadores antiguos no son compatibles con el método addEventListener.
// Aquí hay una manera simple de manejar esto; está lejos de ser la única.
function addEvent(element, event, callback) {
  let previousEventCallBack = element["on"+event];
  element["on"+event] = function (e) {
    const output = callback(e);

    // Una devolución de llamada que devuelve «false» detiene la cadena de devolución de llamada
    // e interrumpe la ejecución de la devolución de llamada del evento.
    if (output === false) return false;

    if (typeof previousEventCallBack === 'function') {
      output = previousEventCallBack(e);
      if(output === false) return false;
    }
  }
};

// Ahora podemos reconstruir nuestra restricción de validación
// Debido a que no confiamos en la pseudoclase de CSS, tenemos que
// establecer explícitamente la clase valid/invalid en nuestro campo de correo electrónico
addEvent(window, "load", function () {
  // Aquí probamos si el campo está vacío (recuerda, el campo no es obligatorio)
  // Si no es así, verificamos si su contenido es una dirección de correo electrónico con el formato correcto.
  const test = email2.value.length === 0 || emailRegExp.test(email2.value);

  email2.className = test ? "valid" : "invalid";
});

// Esto define lo que sucede cuando el usuario escribe en el campo
addEvent(email2, "input", function () {
  const test = email2.value.length === 0 || emailRegExp.test(email2.value);
  if (test) {
    email2.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  } else {
    email2.className = "invalid";
  }
});

// Esto define lo que sucede cuando el usuario intenta enviar los datos.
addEvent(form, "submit", function () {
  const test = email2.value.length === 0 || emailRegExp.test(email2.value);

  if (!test) {
    email2.className = "invalid";
    error.innerHTML = "I expect an e-mail, darling!";
    error.className = "error active";

    // Algunos navegadores antiguos no son compatibles con el método event.preventDefault ()
    return false;
  } else {
    email2.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  }
});