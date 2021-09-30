const poetlist = document.getElementById('poetlist');
const poetRes = axios.get('https://poetrydb.org/author')
.then((poetRes) => {
    const poetData = poetRes.data;
    if (poetData.status) {
        console.log(`problem with response: ${poetData.status}`);
    } else { for (let poet of poetData.authors) {
            const checkbox = document.createElement('input');
            checkbox.value = poet;
            checkbox.type = 'checkbox';
            checkbox.name = 'poets';
            checkbox.id = poet;

            const label = document.createElement('label');
            label.htmlFor = poet;
            label.innerText = poet;

            const br = document.createElement('br');

            poetlist.appendChild(checkbox);
            poetlist.appendChild(label);  
            poetlist.appendChild(br);          
        }
    }
})
.catch((err) => {console.log(`oops: ${err}`);})