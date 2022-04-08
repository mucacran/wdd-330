function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");

	var elementClasses = document.getElementsByClassName("navigation")[0].classList;
	console.log(elementClasses.length)

	for(var i=0; i < elementClasses.length;i++)
	{
		console.log(elementClasses[i]);
	}	
}

/******************************TAMAÑO DE LA PANTALLA******************** */

var anchoPantalla = window.innerWidth;
var altoPantalla = document.documentElement.clientHeight;



console.log(anchoPantalla + ' - ' + altoPantalla);
/*******************************FIN DL TAMAÑO************************************ */
