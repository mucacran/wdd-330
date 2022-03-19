import {getJSON, getLocation} from './utilities.js'
const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
const baseUr2 ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
const baseUr3 ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-02-02';

/*var terremoto = getJSON(baseUrl);
var localizacion = getLocation(terremoto);


var localizacion = getLocation(getJSON(baseUrl));

console.log(localizacion);*/


function testGetQuakesForLocation() {
    // call the getLocation function to get the lat/long
    var location = getLocation();
    // use that information to build out the correct URL
    const geoUrl = baseUrl + '&' +location// add location information here
    // use the url to request the correct quakes 
    var terremoto = getJSON(geoUrl);
    //log out the quakes for now.
    console.log(terremoto);
  }

  //testGetQuakesForLocation();
  //getQuakesForLocation();




  let quakes = [];
/*
  */

// We need to refactor the everything function. In the end we want a function like below
// create the appropriate functions, move the functionality from everything() to the functions so that the showQuakes() function below will work.
export async function showQuakes() {
    // get the current location
    const location = await initPos();
    // get the list of quakes for the location
    quakes = await getQuakesForLocation(location);
    // render the list to the list element
    const listElement = document.querySelector("#quakeList");
    listElement.innerHTML = generateListMarkup(
      quakes.features,
      earthquakeListTemplate
    );
  
    // attach a listener to the quakes that will listen for a click and render out details about the quake
    listElement.addEventListener("click", earthQuakeClickHandler);
  }

  // Quake Model
export default class Quake {
    constructor() {
      this.baseUrl =
        'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';
      // this is where we will store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
      this._quakes = [];
    }
    async getEarthQuakesByRadius(position, radius = 100) {
      // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
      return this._quakes;
    }
    getQuakeById(id) {
      // filter this._quakes for the record identified by id and return it
      return this._quakes.features.filter(item => item.id === id)[0];
    }
  }