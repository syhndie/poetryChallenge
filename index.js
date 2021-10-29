import{ populatePoets } from "./modules/poetlist.js";
import{ submitPoets } from "./modules/submitPoets.js";

const poetsToCompare = 4;

window.addEventListener('load', () => {
    populatePoets(poetsToCompare);
});

const poetsSubmitBtn = document.getElementById('poets-submit')
poetsSubmitBtn.addEventListener('click', (e) => {
    submitPoets();
});