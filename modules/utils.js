export function displayError(errorDivID, errorMessage, errorCode) {
    const errorDiv = document.getElementById(errorDivID);
    const errorParagraph = document.createElement('p');
    errorParagraph.innerText = `${errorMessage}: ${errorCode}`;
    errorDiv.appendChild(errorParagraph);
};

function countClickedButtons() {
    const allButtons = document.querySelectorAll(".poet-selector");
    let clickedCount = 0;
    for (let button of allButtons) {
        if (button.className.includes('is-selected')) {
            clickedCount++;            
        }
    }
    return { clickedCount, allButtons };
};

export function setButtonsStatus(poetsNumber) {
    const { clickedCount, allButtons } = countClickedButtons();
    const submitButton = document.getElementById('poets-submit-button');    
    if (clickedCount == poetsNumber) {
        submitButton.disabled = false;
        for (let button of allButtons) {
            if (button.className.includes('is-selected')) {
                button.disabled = false;
            } else {
                button.disabled = true;
            }
        }
    } else {
        submitButton.disabled = true;
        for (let button of allButtons) {
            button.disabled = false;
        }
    }
};

export function removeButtons() {
    const poetButtonsDiv = document.getElementById('poets-btns');
    const allPoetButtons = document.querySelectorAll("button.poet-selector");
    for (let button of allPoetButtons) {
        poetButtonsDiv.removeChild(button);
    }
    const submitButtonDiv = document.getElementById('poets-submit');
    const submitButton = document.getElementById('poets-submit-button');
    submitButtonDiv.removeChild(submitButton);
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

