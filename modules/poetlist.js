import { displayError, setButtonsStatus } from "./utils.js";

export async function populatePoets(poetsNumber) {
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
                btn.setAttribute("id", poetID);
                btn.classList.add('button');
                btn.classList.add('is-rounded');
                btn.classList.add('poet-selector');
                btn.addEventListener('click', (e) => {
                    e.target.classList.toggle('is-selected');
                    e.target.classList.toggle('is-danger');
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