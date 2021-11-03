import { shuffle } from "./utils.js";

export function gameSetup(poemInfo) {
    const poetsDiv = document.getElementById('poets-btns');
    const titlesDiv = document.getElementById('titles-btns');
    const poetsShuffled = shuffle(poemInfo);
    for (let poet of poetsShuffled) {
        const btn = document.createElement('button');
    }
    console.log(poemInfo);
};