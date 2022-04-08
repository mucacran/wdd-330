
export function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");

	var elementClasses = document.getElementsByClassName("navigation")[0].classList;
	console.log(elementClasses.length)

	for(var i=0; i < elementClasses.length;i++)
	{
		console.log(elementClasses[i]);
	}	
}



