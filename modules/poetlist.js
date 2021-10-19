import { displayError, setButtonsStatus, removeButtons } from "./utils.js";

export function populatePoets(poetsNumber) {
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
    })
    .catch((err) => {
        displayError('poets-error', 'There was a problem connecting to the Poetry DB', err);
    });
};

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