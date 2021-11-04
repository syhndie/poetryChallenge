import { shuffle } from "./utils.js";

export function gameSetup(poemInfo) {
    const poetsDiv = document.getElementById('poets-div');
    const titlesDiv = document.getElementById('titles-div');

    const poetsShuffled = shuffle(poemInfo);
    for (let poet of poetsShuffled) {
        console.log(poet.author, poet.title);   
    }

    const titlesShuffled = shuffle(poemInfo);
    for (let title of titlesShuffled) {
        console.log(title.author, title.title);
    }
};