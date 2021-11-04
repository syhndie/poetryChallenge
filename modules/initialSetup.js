import{ submitPoets } from "./submitPoets.js";
import { gameSetup } from "./gameSetup.js";
import { displayError, setButtonsStatus } from "./utils.js";


export async function initialSetup(numberOfMatches) {
    const submitDiv = document.getElementById('submit-div');
    const submitBtn = document.createElement('button');
    submitBtn.id = 'poets-submit-btn';
    submitBtn.disabled = true;
    submitBtn.innerText = 'Submit Your Selection of Poets';
    submitBtn.classList.add('button', 'is-fullwidth', 'is-medium', 'is-submit-btn');
    submitBtn.addEventListener('click', async (e) => {
        const poemInfo = await submitPoets();
        gameSetup(poemInfo);
    });
    submitDiv.appendChild(submitBtn);

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
                    setButtonsStatus(numberOfMatches);
                });
                btn.innerText = poet;
                poetsDiv.appendChild(btn);
            }
        }        
    } catch(err) {
        displayError('There was a problem connecting to the Poetry DB', err);
    }
};