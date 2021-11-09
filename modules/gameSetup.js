import { createSubmitBtn, shuffle, setMatchSubmitBtnStatus } from "./utils.js";

export function gameSetup(poemInfo) {
    const submitBtn = createSubmitBtn('Submit Your Matches');
    submitBtn.addEventListener('click', (e) => {
        console.log('Check submitted matches');
    });

    const colorClasses = ['is-green', 'is-pink', 'is-purple', 'is-yellow'];
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
            for (let i = 0; i < colorClasses.length; i++) {
                btn.classList.remove(colorClasses[i], 'matched');
                setMatchSubmitBtnStatus(colorClasses);
            }
            if (classToAdd) {
                btn.classList.add(classToAdd, 'matched');
                setMatchSubmitBtnStatus(colorClasses);
            }
            classToAdd = null;
        });
        titlesDiv.appendChild(btn);
    }
};