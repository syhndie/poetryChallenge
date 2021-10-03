export function displayError(errorDivID, errorMessage, errorCode) {
    const errorDiv = document.getElementById(errorDivID);
    const errorParagraph = document.createElement('p');
    errorParagraph.innerText = `${errorMessage}: ${errorCode}`;
    errorDiv.appendChild(errorParagraph);
};