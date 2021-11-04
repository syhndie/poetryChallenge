import { displayError, removeBtns } from "./utils.js";

export async function submitPoets() {
    const selectedBtns = document.querySelectorAll('.is-selected');
    const poemArray = [];
    for (let btn of selectedBtns) {
        try {
            const axiosString = `https://poetrydb.org/author,random/${btn.innerText};1`;
            const res = await axios.get(axiosString);
            if(res.data.status){
                displayError('The PoetryDB request did not return a result', res.data.status);
            } else {
                const poemInfo = {
                    author: res.data[0].author,
                    title: res.data[0].title
                }
                poemArray.push(poemInfo);
            }
        } catch(err) {
            displayError('There was a problem connecting to the Poetry DB', err);
        }
    }
    removeBtns();
    return poemArray;
};

