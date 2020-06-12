

async function getData() {

    // um CORS Fehler aufzuheben, die durch API verursacht wurden
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";

    const charDb = fetch(`${proxyUrl}https://anapioficeandfire.com/api/characters`)
        .then(response => response.json())
        .then(data => data);
        return charDb;
}

function filterCharactersByGender(allChars, gender) {
    console.log(allChars.filter(char => char.gender===gender));
}

function mapCharactersByAlias(allChars) {
    console.log(allChars.map(char => char.aliases))
}

getData().then(data => {
    filterCharactersByGender(data, "Male")
    filterCharactersByGender(data, "Female")
    mapCharactersByAlias(data)
})



function renderToDom(targetElementId, createElementType, innerHTMLString) {

    // gets HTML element with specified id from DOM
    const targetElement = document.getElementById(targetElementId);

    // creates an HTML element of selected type
    // should be a string.
    // example: "li" creates a <li> element
    const element = document.createElement(createElementType);

    // appends previously created element
    // to element with specified id
    targetElement.appendChild(element);
    // sets inner HTML of previously created element
    // to provided string. This can be valid HTML, just
    // some data of type String or undefined
    innerHTMLString ? (element.innerHTML = innerHTMLString) : "";
    // returns element so the element can be manipulated
    return element;
}

renderToDom("charGoTDb", "string" , getData())