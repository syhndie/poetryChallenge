import { displayError } from "./utils.js";

export function populatePoets () {
    axios.get('https://poetrydb.org/author')
    .then((res) => {
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
                btn.addEventListener('click', (e) => {
                    e.target.classList.toggle('is-danger');
                });
                btn.innerText = poet;
                poetsBtns.appendChild(btn);
            }
        }
    })
    .catch((err) => {
        displayError('poets-error', 'There was a problem connecting to the Poetry DB', err);
    });
};