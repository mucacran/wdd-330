// import Hikes from './fecha.js';
import arrancar from './ladyload.js';
import {toggleMenu} from './menuAmburgesa.js';
import {temples} from './templos.js';

arrancar();
window.toggleMenu = toggleMenu;
temples();
