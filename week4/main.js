const form = document.forms[0];
//otras formas de se;alar al formulario
/*
const form = document.getElementsByTagname('form')[0];
const form = document.forms.search; //En lugar de usar un índice numérico, podemos usar el  name atributo para identificar un formulario:
const form = document.forms['search']; //asi tambien en el caso de que el nombre del atribito tenga caracteres raros como espacio o guiones
*/

const input = form.elements.searchInput;
const cosa = form.elements.searchCosa;
input.addEventListener('focus', () => {
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);
input.addEventListener('blur', () => {
    if(input.value === '')
    input.value = 'Search Here';
}, false);
//input.addEventListener('change', () => alert('changed'), false);

const form1 = document.forms['search'];
form1.addEventListener ('submit', search, false);

function search() {
    alert(' Form Submitted ' + `You Searched for: ${cosa.value}`);
    event.preventDefault();//evita que el formulario se envie a la url colocado en el atributo accion del formulario de la pagina
}

input.value = 'Search Here';

const form2 = document.forms['hero'];
form2.addEventListener('submit', makeHero, false);

function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = form2.heroName.value; // create a name property based on the input field's value

    hero.realName = form2.realName.value;

    console.log(hero.realName);

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

/*hero.powers = [];
for (let i=0; i < document.forms['hero'].powers.length; i++) {
    if (document.forms['hero'].powers[i].checked) {
        hero.powers.push(form.powers[i].value);
    }
}*/
hero.powers = [...form2.powers].filter(box => box.checked).map(box => box.value);

