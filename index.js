import{ createInitialBtns } from "./modules/createInitialBtns.js";
import{ submitPoets } from "./modules/submitPoets.js";
import { gameSetup } from "./modules/gameSetup.js";

const poetsToCompare = 4;

window.addEventListener('load', () => {
    createInitialBtns(poetsToCompare);
});

const poetsSubmitBtn = document.getElementById('poets-submit')
poetsSubmitBtn.addEventListener('click', async (e) => {
    const poemInfo = await submitPoets();
    gameSetup(poemInfo);
});