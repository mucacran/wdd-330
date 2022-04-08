export function temples(){
var server = 'api.openweathermap.org';
var api = '5cd682059cff3541db92f27dcde7121d';
var limaPE = "3936456";
var cochabambaBO = '3919968';
var barranquillaCO = '3689147';
var guayaquilEC = '3657509';
var medidaUnidad = 'imperial';
var typoShow = ['weather', 'forecast'];
const numCiudad = [guayaquilEC,barranquillaCO,limaPE,cochabambaBO]

/********************************************************************** */
//var temploID = document.getElementById('temple');
const apiURL = "https://mucacran.github.io/sergiobravo.github.io/pruebaFinal1/js/templos.json";
var temploID = document.querySelectorAll('.contenedor.temple');
var pronostico = document.querySelectorAll('.proClima');
var numData = [];
var temploIDID = [];
temploID.forEach(cada => {
    var temploMOstrar = cada.getAttribute('data-templo');
    numData.push(parseInt(temploMOstrar));
})


fetch(apiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const thetemplos = jsonObject['templos'];
        for (let i = 0; i < thetemplos.length; i++ ){
            temploID[i].innerHTML = '<img src="' + thetemplos[i].imageurl + '" alt="'+ thetemplos[i].name +'" >' + 
                                        '<p> <b>Address</b>: ' + thetemplos[i].address + '</p>' +
                                        '<p> <b>Telephone</b>: ' + thetemplos[i].Telephone + '</p>' +
                                        '<p> <b>Mail</b>: ' + thetemplos[i].CorreoElectrico + '</p>' +
                                        '<p> <b>Services</b>: ' + thetemplos[i].LosServicios + '</p>' +
                                        '<p> <b>History</b>: ' + thetemplos[i].historia + '</p>' +
                                        '<p> <b>Ordinance Schedule</b>: ' + thetemplos[i].calendarioOrdenanza + '</p>' +
                                        '<p> <b>Session Schedule</b>: ' + thetemplos[i].calendarioSecion + '</p>' +
                                        '<p> <b>Temple Closure Schedule</b>: Tuesday ' + thetemplos[i].calendarioSierre[0].Tuesday +
                                        '<br>Tuesday ' + thetemplos[i].calendarioSierre[0].Wednesday + '</p>';


                                        const climaTemplosEC = `https://api.openweathermap.org/data/2.5/${typoShow[0]}?id=${numCiudad[i]}&appid=${api}&units=${medidaUnidad}`;
                                        console.log(climaTemplosEC);
                                        fetch(climaTemplosEC)
                                        .then((response) => response.json())
                                        .then((jsObject) => {
                                            
                                            pronostico[i].innerHTML = jsObject.main.temp.toFixed(0) + ' ºF';
                                        });
        }
    })
}

