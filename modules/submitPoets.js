import { displayError, removeButtons } from "./utils.js";

export async function submitPoets() {
    const poetButtons = document.querySelectorAll('button.is-selected');
    const poemArray = [];
    for (let poetButton of poetButtons) {
        try {
            const axiosString = `https://poetrydb.org/author,random/${poetButton.innerText};1`;
            const res = await axios.get(axiosString);
            if(res.data.status){
                displayError('poets-error', 'The PoetryDB request did not return a result', res.data.status);
            } else {
                const poemInfo = {
                    author: res.data[0].author,
                    title: res.data[0].title
                }
                poemArray.push(poemInfo);
            }
        } catch(err) {
            displayError('poets-error', 'There was a problem connecting to the Poetry DB', err);
        }
    }
    console.log(poemArray);
    removeButtons();
};

