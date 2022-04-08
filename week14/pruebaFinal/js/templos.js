var server = 'api.openweathermap.org';
var api = '5cd682059cff3541db92f27dcde7121d';
var limaPE = "3936456";
var cochabambaBO = '3919968';
var barranquillaCO = '3689147';
var guayaquilEC = '3657509';
var medidaUnidad = 'imperial';
var typoShow = ['weather', 'forecast'];

/********************************************************************** */
var temploID = document.getElementById('temple');
var temploMOstrar = temploID.getAttribute('data-templo');
var numData = parseInt(temploMOstrar);

const apiURL = "https://mucacran.github.io/sergiobravo.github.io/pruebaFinal1/js/templos.json";

fetch(apiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); 

        const thetemplos = jsonObject['templos'];

        for (let i = 0; i < thetemplos.length; i++ )
        {
            if(i == numData)
            {
                temploID.innerHTML =    '<img src="' + thetemplos[i].imageurl + '" alt="'+ thetemplos[i].name +'" >' + 
                                        '<p> <b>Address</b>: ' + thetemplos[i].address + '</p>' +
                                        '<p> <b>Telephone</b>: ' + thetemplos[i].Telephone + '</p>' +
                                        '<p> <b>Mail</b>: ' + thetemplos[i].CorreoElectrico + '</p>' +
                                        '<p> <b>Services</b>: ' + thetemplos[i].LosServicios + '</p>' +
                                        '<p> <b>History</b>: ' + thetemplos[i].historia + '</p>' +
                                        '<p> <b>Ordinance Schedule</b>: ' + thetemplos[i].calendarioOrdenanza + '</p>' +
                                        '<p> <b>Session Schedule</b>: ' + thetemplos[i].calendarioSecion + '</p>' +
                                        '<p> <b>Temple Closure Schedule</b>: Tuesday ' + thetemplos[i].calendarioSierre[0].Tuesday +
                                        '<br>Tuesday ' + thetemplos[i].calendarioSierre[0].Wednesday + '</p>';

                                        const climaTemplosEC = `https://api.openweathermap.org/data/2.5/${typoShow[0]}?id=${guayaquilEC}&appid=${api}&units=${medidaUnidad}`;
                                        fetch(climaTemplosEC)
                                        .then((response) => response.json())
                                        .then((jsObject) => {
                                            
                                            document.getElementById('ecuador-Weather').innerHTML = jsObject.main.temp.toFixed(0) + ' ºF';
                                        });
            }
            if(i == numData)
            {
                temploID.innerHTML =    '<img src="' + thetemplos[i].imageurl + '" alt="'+ thetemplos[i].name +'" >' + 
                                        '<p> <b>Address</b>: ' + thetemplos[i].address + '</p>' +
                                        '<p> <b>Telephone</b>: ' + thetemplos[i].Telephone + '</p>' +
                                        '<p> <b>Mail</b>: ' + thetemplos[i].CorreoElectrico + '</p>' +
                                        '<p> <b>Services</b>: ' + thetemplos[i].LosServicios + '</p>' +
                                        '<p> <b>History</b>: ' + thetemplos[i].historia + '</p>' +
                                        '<p> <b>Ordinance Schedule</b>: ' + thetemplos[i].calendarioOrdenanza + '</p>' +
                                        '<p> <b>Session Schedule</b>: ' + thetemplos[i].calendarioSecion + '</p>' +
                                        '<p> <b>Temple Closure Schedule</b>: Tuesday ' + thetemplos[i].calendarioSierre[0].Tuesday +
                                        '<br>Tuesday ' + thetemplos[i].calendarioSierre[0].Wednesday + '</p>';

                                        const climaTemplosEC = `https://api.openweathermap.org/data/2.5/${typoShow[0]}?id=${barranquillaCO}&appid=${api}&units=${medidaUnidad}`;
                                        fetch(climaTemplosEC)
                                        .then((response) => response.json())
                                        .then((jsObject) => {
                                            
                                            document.getElementById('colombia-Weather').innerHTML = jsObject.main.temp.toFixed(0) + ' ºF';
                                        });

            }
            if(i == numData)
            {
                temploID.innerHTML =    '<img src="' + thetemplos[i].imageurl + '" alt="'+ thetemplos[i].name +'" >' + 
                                        '<p> <b>Address</b>: ' + thetemplos[i].address + '</p>' +
                                        '<p> <b>Telephone</b>: ' + thetemplos[i].Telephone + '</p>' +
                                        '<p> <b>Mail</b>: ' + thetemplos[i].CorreoElectrico + '</p>' +
                                        '<p> <b>Services</b>: ' + thetemplos[i].LosServicios + '</p>' +
                                        '<p> <b>History</b>: ' + thetemplos[i].historia + '</p>' +
                                        '<p> <b>Ordinance Schedule</b>: ' + thetemplos[i].calendarioOrdenanza + '</p>' +
                                        '<p> <b>Session Schedule</b>: ' + thetemplos[i].calendarioSecion + '</p>' +
                                        '<p> <b>Temple Closure Schedule</b>: Tuesday ' + thetemplos[i].calendarioSierre[0].Tuesday +
                                        '<br>Tuesday ' + thetemplos[i].calendarioSierre[0].Wednesday + '</p>';

                                        const climaTemplosEC = `https://api.openweathermap.org/data/2.5/${typoShow[0]}?id=${limaPE}&appid=${api}&units=${medidaUnidad}`;
                                        fetch(climaTemplosEC)
                                        .then((response) => response.json())
                                        .then((jsObject) => {
                                            
                                            document.getElementById('peru-Weather').innerHTML = jsObject.main.temp.toFixed(0) + ' ºF';
                                        });

            }
            if(i == numData){
                temploID.innerHTML =    '<img src="' + thetemplos[i].imageurl + '" alt="'+ thetemplos[i].name +'" >' + 
                                        '<p> <b>Address</b>: ' + thetemplos[i].address + '</p>' +
                                        '<p> <b>Telephone</b>: ' + thetemplos[i].Telephone + '</p>' +
                                        '<p> <b>Mail</b>: ' + thetemplos[i].CorreoElectrico + '</p>' +
                                        '<p> <b>Services</b>: ' + thetemplos[i].LosServicios + '</p>' +
                                        '<p> <b>History</b>: ' + thetemplos[i].historia + '</p>' +
                                        '<p> <b>Ordinance Schedule</b>: ' + thetemplos[i].calendarioOrdenanza + '</p>' +
                                        '<p> <b>Session Schedule</b>: ' + thetemplos[i].calendarioSecion + '</p>' +
                                        '<p> <b>Temple Closure Schedule</b>: Tuesday ' + thetemplos[i].calendarioSierre[0].Tuesday +
                                        '<br>Tuesday ' + thetemplos[i].calendarioSierre[0].Wednesday + '</p>';

                                        const climaTemplosEC = `https://api.openweathermap.org/data/2.5/${typoShow[0]}?id=${cochabambaBO}&appid=${api}&units=${medidaUnidad}`;
                                        fetch(climaTemplosEC)
                                        .then((response) => response.json())
                                        .then((jsObject) => {
                                            
                                            document.getElementById('bolivia-Weather').innerHTML = jsObject.main.temp.toFixed(0) + ' ºF';
                                        });
            }
        }
    }
    
);