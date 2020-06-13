
const listMalesButton = document.getElementById("maleChars");
listMalesButton.addEventListener("click", ()=> renderMaleCharacters());

const listFemalesButton = document.getElementById("femaleChars");
listFemalesButton.addEventListener("click", ()=> listFemaleChars());

const listNamesButton = document.getElementById("charsName");
listNamesButton.addEventListener("click", ()=> listNames());

async function getData() {

    // um CORS Fehler aufzuheben, die durch API verursacht wurden
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";

    const charDb = fetch(`${proxyUrl}https://anapioficeandfire.com/api/characters`)
        .then(response => response.json())
        .then(data => data);
        return charDb;
}

// erzeugt neues Array mit weiblichen / männlichen Charaktere
function filterCharactersByGender(allChars, gender) {
    console.log(allChars.filter(char => char.gender===gender));
}

function listMaleChars(){getData().then(data => {
    filterCharactersByGender(data, "Male")
})};

function listFemaleChars(){getData().then(data => {
    filterCharactersByGender(data, "Female")
})};

// erzeugt neues Array nur mit Namen der Charaktere
function mapCharactersByAlias(allChars) {
    console.log(allChars.map(char => char.aliases))
}
function listNames(){getData().then(data => {
    mapCharactersByAlias(data)
})};

function renderMaleCharacters() {
    const listOfResult = document.getElementById("renderResult");
    let resultList = listMaleChars();
    for (let result of Object.values(resultList)) {
        let newListItem = document.createElement("li");
        newListItem.innerHTML = result;
        listOfResult.appendChild(newListItem);
    }
}




// function renderToDom(targetElementId, createElementType, addCreateElementClass, innerHTMLString) {
//     // creates an HTML element of selected type
//     // should be a string.
//     // example: "li" creates a <li> element
//     const element = document.createElement(createElementType);
//     // gets HTML element with specified id from DOM
//     const targetElement = document.getElementById(targetElementId);
//     // appends previously created element
//     // to element with specified id
//     targetElement.appendChild(element);
//     // add specified class to previously
//     // created element
//     targetElement.classList.add(addCreateElementClass);
//     // sets inner HTML of previously created element
//     // to provided string. This can be valid HTML, just
//     // some data of type String or undefined
//     innerHTMLString ? (element.innerHTML = innerHTMLString) : "";
//     // returns element so the element can be manipulated
//     return element;
// }
//
// // renderToDom("charGoTDb", "div" , "name", getData());
//
//     //fetch --> array als rückgabe
// // fetchPeople().then((people) =>
// //     people.map((person) => {
// //         renderToDom(
// //             "listOfPeople",
// //             "div",
// //             `${person.first_name}, ${person.last_name}`
// //         );
// //     })
// // );
//
// // async function fetchPeople() {
// //     const people = fetch("https://reqres.in/api/users")
// //         .then((response) => response.json())
// //         .then((data) => data.data);
// //     return people;
// // }