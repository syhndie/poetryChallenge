const populatePoets = () => {
    axios.get('https://poetrydb.org/author')
    .then((res) => {
        if (res.data.status) {
            console.log('boo');
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
        console.log('ouch');
    });
};