const poetsDiv = document.getElementById('poets');
const poetRes = axios.get('https://poetrydb.org/author')
.then((poetRes) => {
    const poetData = poetRes.data;
    if (poetData.status) {
        console.log(`problem with response: ${poetData.status}`);
    } else {
        const poets = poetData.authors;
        for (let poet of poets) {
            // const checkbox = document.createElement('input');
            // checkbox.value = poet;
            // checkbox.type = 'checkbox';
            // checkbox.name = 'poets';
            // checkbox.id = poet;

            // const label = document.createElement('label');
            // label.htmlFor = poet;
            // label.innerText = poet;

            const tag = document.createElement('span');
            tag.classList.add('tag');
            tag.classList.add('is-rounded');
            tag.innerText = poet;
            // tag.appendChild(checkbox);
            // tag.appendChild(label); 
            poetsDiv.appendChild(tag);


        }
    }
})
.catch((err) => {console.log(`oops: ${err}`);});