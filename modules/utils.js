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

export function setButtonsStatus(numberOfMatches) {
    const allPoetBtns = document.querySelectorAll('.poet-selector');
    const numberSelected = countSelectedPoets();
    const submitBtn = document.getElementById('poets-submit-btn');    
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

