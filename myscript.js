const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_RK5Kugn6IL3R6i1Bh7wBhhT61Tt84iAsSDA7Bwng8dsgqu2f5IVFPrXTcW1E6xBh"
});

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
    .then(response => response.text())
    .then(result => {
        let thediv = document.querySelector("#firstpost");
        let myobj = JSON.parse(result);
        let imgpost = document.createElement("img");
        let ppost = document.createElement("p");
        let header = document.createElement('h1');
        header.innerHTML = `${myobj[0]['breeds'][0]['name']}`
        ppost.innerHTML = `${myobj[0]["breeds"][0]["description"]}`;
        imgpost.src = myobj[0]["url"];
        thediv.appendChild(header);
        thediv.appendChild(ppost);
        thediv.appendChild(imgpost);
        // myimg.src = myobj[0]["url"];
        // let myp = document.querySelector("#desc");
        // myp.innerHTML = `${myobj[0]["breeds"][0]["description"]}`;

    })
    .catch(error => console.log('error', error));

let loadmore = function () {
    fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=3", requestOptions)
        .then(response => response.text())
        .then(result => {
            let myobj = JSON.parse(result);
            let posts = document.querySelector("#posts");
            let arrofposts = [document.createElement('div'), document.createElement('div'), document.createElement('div')];
            for(let i = 0; i < 3; i++){
                arrofposts[i].classList.add('post');
                let header = document.createElement('h1');
                let p = document.createElement('p');
                header.innerHTML = `${myobj[i]['breeds'][0]['name']}`
                p.innerHTML = `${myobj[i]["breeds"][0]["description"]}`;
                let imgpost = document.createElement("img");
                imgpost.src = myobj[i]["url"];
                arrofposts[i].appendChild(header);
                arrofposts[i].appendChild(p);
                arrofposts[i].appendChild(imgpost);
                posts.appendChild(arrofposts[i]);
            }
            
            // let imgpost = document.createElement("img");
            // let ppost = document.createElement("p");
            // ppost.innerHTML = `${myobj[0]["breeds"][0]["description"]}`;
            // imgpost.src = myobj[0]["url"];
            // thediv.appendChild(ppost);
            // thediv.appendChild(imgpost);
            // myimg.src = myobj[0]["url"];
            // let myp = document.querySelector("#desc");
            // myp.innerHTML = `${myobj[0]["breeds"][0]["description"]}`;

        })
        .catch(error => console.log('error', error));
}