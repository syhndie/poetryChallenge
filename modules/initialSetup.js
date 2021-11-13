import{ submitPoets } from "./submitPoets.js";
import { gameSetup } from "./gameSetup.js";
import { createSubmitBtn, displayError } from "./utils.js";

function countSelectedPoets() {
    const allPoets = document.querySelectorAll(".poet-selector");
    let count = 0;
    for (let poet of allPoets) {
        if (poet.className.includes('is-selected')) {
            count++;            
        }
    }
    return count;
};

function setPoetSelectingBtnStatuses(numberOfMatches) {
    const allPoetBtns = document.querySelectorAll('.poet-selector');
    const numberSelected = countSelectedPoets();
    const submitBtn = document.querySelector('.is-submit-btn');
    if (numberSelected == numberOfMatches) {
        submitBtn.disabled = false;
        for (let poetBtn of allPoetBtns) {
            if (poetBtn.className.includes('is-selected')) {
                poetBtn.disabled = false;
            } else {
                poetBtn.disabled = true;
            }
        }
    } else {
        submitBtn.disabled = true;
        for (let poetBtn of allPoetBtns) {
            poetBtn.disabled = false;
        }
    }
};

export async function initialSetup(numberOfMatches) {
    const submitBtn = createSubmitBtn('Submit Your Selection of Poets');
    submitBtn.addEventListener('click', async (e) => {
        const poemInfo = await submitPoets();
        gameSetup(poemInfo);
    });

    try {
        const res = await axios.get('https://poetrydb.org/author');
        if (res.data.status) {
            displayError('The PoetryDB request did not return a result', res.data.status);
        } else {
            const poetsDiv = document.getElementById('poets-div');
            const poets = res.data.authors;
            for (let poet of poets) {
                const btn = document.createElement('button');
                const poetID = poet.toLowerCase().replaceAll(' ', '-');
                btn.id = poetID;
                btn.classList.add('button', 'is-rounded', 'poet-selector');
                btn.addEventListener('click', (e) => {
                    e.target.classList.toggle('is-selected');
                    setPoetSelectingBtnStatuses(numberOfMatches);
                });
                btn.innerText = poet;
                poetsDiv.appendChild(btn);
            }
        }        
    } catch(err) {
        displayError('There was a problem connecting to the Poetry DB', err);
    }
};