import {populatePoets} from "./modules/poetlist.js";

const poetsToCompare = 4;

window.addEventListener('load', () => {
    populatePoets(poetsToCompare);
});