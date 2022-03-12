import { getJSON, getLocation } from "./utilities.js";
import QuakesController from "./QuakesController.js";

function getQuakeList() {
  const quakes = new QuakesController("#quakeList");
  quakes.init();
}

document.getElementById("radius").addEventListener("change", getQuakeList);

document.getElementById("back").addEventListener("click", () => {
   getQuakeList();
   document.getElementById("back").classList.add("hidden");

});
