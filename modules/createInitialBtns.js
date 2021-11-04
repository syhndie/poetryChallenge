import{ submitPoets } from "./submitPoets.js";
import { gameSetup } from "./gameSetup.js";
import { displayError, setButtonsStatus } from "./utils.js";


export async function createInitialBtns(poetsNumber) {
    const submitDiv = document.getElementById('submit-btn-div');
    const submitbtn = document.createElement('button');
    submitbtn.id = 'poets-submit-button';
    submitbtn.disabled = true;
    submitbtn.innerText = 'Submit Your Selection of Poets';
    submitbtn.classList.add('button', 'is-fullwidth', 'is-medium', 'is-submit-btn');
    submitbtn.addEventListener('click', async (e) => {
        const poemInfo = await submitPoets();
        gameSetup(poemInfo);
    });
    submitDiv.appendChild(submitbtn);

    try {
        const res = await axios.get('https://poetrydb.org/author');
        if (res.data.status) {
            displayError('poets-error', 'The PoetryDB request did not return a result', res.data.status);
        } else {
            const poetsBtns = document.getElementById('poets-btns');
            const poets = res.data.authors;
            for (let poet of poets) {
                const btn = document.createElement('button');
                const poetID = poet.toLowerCase().replaceAll(' ', '-');
                btn.id = poetID;
                btn.classList.add('button', 'is-rounded', 'poet-selector');
                btn.addEventListener('click', (e) => {
                    e.target.classList.toggle('is-selected');
                    setButtonsStatus(poetsNumber);
                });
                btn.innerText = poet;
                poetsBtns.appendChild(btn);
            }
        }        
    } catch(err) {
        displayError('poets-error', 'There was a problem connecting to the Poetry DB', err);
    }
};