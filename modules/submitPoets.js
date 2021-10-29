import { displayError, removeButtons } from "./utils.js";

export function submitPoets() {
    const poetButtons = document.querySelectorAll('button.is-selected');
    for (let poetButton of poetButtons) {
        const axiosString = `https://poetrydb.org/author,random/${poetButton.innerText};1`;
        axios.get(axiosString)
        .then((res) => {
            if(res.data.status){
                displayError('poets-error', 'The PoetryDB request did not return a result', res.data.status);
            } else {
                console.log(res.data);
            }
        })
        .catch((err) => {
            displayError('poets-error', 'There was a problem connecting to the Poetry DB', err);
        });
    }
    removeButtons();
};