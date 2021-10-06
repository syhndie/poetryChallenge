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
        if (button.className.includes('is-danger')) {
            clickedCount++;            
        }
    }
    return { clickedCount, allButtons };
};

export function setButtonsStatus(poetsNumber) {
    const { clickedCount, allButtons } = countClickedButtons();
    const submitButton = document.getElementById('poets-submit');    
    if (clickedCount == poetsNumber) {
        submitButton.disabled = false;
        for (let button of allButtons) {
            if (button.className.includes('is-danger')) {
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