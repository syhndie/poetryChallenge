export function createSubmitBtn(text) {
    const submitDiv = document.getElementById('submit-div');
    const submitBtn = document.createElement('button');
    submitBtn.disabled = true;
    submitBtn.innerText = text;
    submitBtn.classList.add('button', 'is-fullwidth', 'is-medium', 'is-submit-btn');
    submitDiv.appendChild(submitBtn);
    return submitBtn;
};

export function displayError(errorMessage, errorCode) {
    const errorDiv = document.getElementById('error-div');
    const errorParagraph = document.createElement('p');
    errorParagraph.innerText = `${errorMessage}: ${errorCode}`;
    errorDiv.appendChild(errorParagraph);
};

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

export function setPoetSelectingBtnStatuses(numberOfMatches) {
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

export function removeBtns() {
    const allBtns = document.querySelectorAll('button');
    for (let btn of allBtns) {
        btn.remove();
    }
};

export function shuffle(array) {
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

export function setMatchSubmitBtnStatus(colorClasses) {
    const submitBtn = document.querySelector('.is-submit-btn');
    const titlesMatched = countMatches();
    if (titlesMatched == colorClasses.length) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
};

