import { createSubmitBtn } from "./utils.js";
import { checkMatches } from "./checkMatches.js";

const colorClasses = ['is-green', 'is-pink', 'is-purple', 'is-yellow'];

function shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
        const index = Math.floor(Math.random() * counter);
        counter--;

        const temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
};

function countMatches() {
    const titleBtns = document.querySelectorAll('.poem-title');
    let count = 0;
    for (let titleBtn of titleBtns) {
        if (titleBtn.classList.contains('matched')) {
            count++;
        }
    }
    return count;
};

function setMatchSubmitBtnStatus(colorClasses) {
    const submitBtn = document.querySelector('.is-submit-btn');
    const titlesMatched = countMatches();
    if (titlesMatched == colorClasses.length) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
};

function removeColorClass(btn) {
    for (let colorClass of colorClasses) {
        btn.classList.remove(colorClass, 'matched');
    }
};

function setTitleBtnColor(e, classToAdd) {
    const btn = e.currentTarget;
    if (!classToAdd) {
        btn.classList.remove('matched');
        removeColorClass(btn);
        setMatchSubmitBtnStatus(colorClasses);
        //add instructional message here
        console.log('no class to add');
        return classToAdd;
    }
    const sameColorTitles = document.querySelectorAll(`.poem-title.${classToAdd}`);
    if (sameColorTitles.length > 0) {
        //add error message here
        console.log('this color already assigned');
    } else {
        removeColorClass(btn);
        btn.classList.add(classToAdd, 'matched');
        setMatchSubmitBtnStatus(colorClasses);
    }
    return null;
};

export function gameSetup(poemInfo) {
    const submitBtn = createSubmitBtn('Submit Your Matches');
    submitBtn.addEventListener('click', (e) => {
        checkMatches(poemInfo);
    });

    const poetsDiv = document.getElementById('poets-div');
    const titlesDiv = document.getElementById('titles-div');

    let classToAdd;

    const poetsShuffled = shuffle(poemInfo);
    for (let i = 0; i < poetsShuffled.length; i++) {
        const poet = poetsShuffled[i].author;
        const btn = document.createElement('button');
        btn.innerText = poet;
        btn.classList.add('button', 'is-rounded', 'poet', colorClasses[i]);
        btn.addEventListener('click', (e) => {
            classToAdd = colorClasses[i];
        });
        poetsDiv.appendChild(btn);
    }

    const titlesShuffled = shuffle(poemInfo);
    for (let i = 0; i < titlesShuffled.length; i++) {
        const title = titlesShuffled[i].title;
        const btn = document.createElement('button');
        btn.classList.add('button', 'is-rounded', 'poem-title');
        btn.innerText = title;
        btn.addEventListener('click', (e) => { 
            classToAdd = setTitleBtnColor(e, classToAdd); 
        });
        titlesDiv.appendChild(btn);
    }
};