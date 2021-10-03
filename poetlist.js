const populatePoets = () => {
    axios.get('https://poetrydb.org/author')
    .then((res) => {
        if (res.data.status) {
            displayError('poets-error', 'The PoetryDB request did not return a result', res.data.status);
        } else {
            const poetsTags = document.getElementById('poets-tags');
            const poets = res.data.authors;
            for (let poet of poets) {
                const tag = document.createElement('span');
                tag.classList.add('tag');
                tag.classList.add('is-rounded');
                tag.innerText = poet;
                poetsTags.appendChild(tag);
            }
        }
    })
    .catch((err) => {
        displayError('poets-error', 'There was a problem connecting to the Poetry DB', err);
    });
};