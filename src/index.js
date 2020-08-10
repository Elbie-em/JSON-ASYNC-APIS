const header = document.querySelector('header');
const section = document.querySelector('section');

// Request URL from github
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

let request = new XMLHttpRequest();

request.open('GET',requestURL);

//setting the responseType to JSON, so that XHR knows that the server will be returning JSON, and that this should be converted behind the scenes into a JavaScript object
request.responseType = 'json';

//send the request with the send() method
request.send();

request.onload = () => {
    const superheroes = request.response;
    populateHeader(superheroes);
    showHeroes(superHeroes);
}

const populateHeader = (jsonObject) => {
    const elemH1 = document.createElement('h1');
    elemH1.textContent = jsonObject['squadName'];

    const elemPg = document.createElement('p');
    elemPg.textContent = `Hometown: ${jsonObject['homeTown']} // Formed: ${jsonObject['formed']}`;
}

const showHeroes  = (jsonObject) => {
    const heroes = jsonObject['members'];
      
  for (let i = 0; i < heroes.length; i++) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';
        
    const superPowers = heroes[i].powers;
    for (let j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}