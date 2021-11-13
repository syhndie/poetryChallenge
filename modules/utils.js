export function createSubmitBtn(text) {
    const submitDiv = document.getElementById('submit-div');
    const submitBtn = document.createElement('button');
    submitBtn.disabled = true;
    submitBtn.innerText = text;
    submitBtn.classList.add('button', 'is-medium', 'is-submit-btn');
    submitDiv.appendChild(submitBtn);
    return submitBtn;
};

export function displayError(errorMessage, errorCode) {
    const errorDiv = document.getElementById('error-div');
    const errorParagraph = document.createElement('p');
    errorParagraph.innerText = `${errorMessage}: ${errorCode}`;
    errorDiv.appendChild(errorParagraph);
};