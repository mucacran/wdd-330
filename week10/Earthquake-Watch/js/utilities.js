/*function getJSON(url){
    var mensaje;
    fetch(url)
    .then(response => function(){
        if(response.ok){
            mensaje = 'todo bien';
        }else{
            mensaje = 'Estas salado viejito';
        }
    })
    return mensaje;
}

const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

getJSON(url);
*/


//const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
/*
function getJSON(url){
fetch(url).then(function(response) {
    if(response.ok) {
        //console.log('Corecto');
        
        return console.log(response.json());
    } else {
      console.log('Respuesta de red OK pero respuesta HTTP no OK');
    }
  })
  .catch(function(error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  });
}
*/
export function getJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};