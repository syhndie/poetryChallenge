import {populatePoets, submitPoets} from "./modules/poetlist.js";

const poetsToCompare = 4;

window.addEventListener('load', () => {
    populatePoets(poetsToCompare);
});

const poetsSubmitBtn = document.getElementById('poets-submit')
poetsSubmitBtn.addEventListener('click', (e) => {
    submitPoets();
});