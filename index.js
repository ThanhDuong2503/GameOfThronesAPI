
const listMalesButton = document.getElementById("maleChars");
listMalesButton.addEventListener("click", ()=> listMaleChars());

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
    // const html = allChars.map(char => `<p>Name: ${char.aliases}</p>`).join("");
    // document.querySelector("renderResult").innerHTML(html);
}
function listNames(){getData().then(data => {
    mapCharactersByAlias(data)
})};


// function renderToDom(targetElementId, createElementType, innerHTMLString) {
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
//     // targetElement.classList.add(addCreateElementClass);
//     // sets inner HTML of previously created element
//     // to provided string. This can be valid HTML, just
//     // some data of type String or undefined
//     innerHTMLString ? (element.innerHTML = innerHTMLString) : "";
//     // returns element so the element can be manipulated
//     return element;
// }
//
// // fetch --> array als rückgabe
// getData().then(charDb =>
//     charDb.map(char => {
//         renderToDom(
//             "renderResult",
//             "div",
//             `${char.name}`
//         );
//     })
// );

const newTest = document.getElementById("renderResult");
let newTestItem=document.createElement("li");
newTestItem.innerHTML="Apple";
newTest.appendChild(newTestItem);

const newTestList = document.getElementById("renderResult");
const fruitList = ["Orange", "Lemon", "Kiwi"];
fruitList.forEach(fruit => {
    let newFruitListItem=document.createElement("li");
    newFruitListItem.innerHTML = fruit;
    newTestList.appendChild(newFruitListItem);
})


const newTest2 = document.getElementById("test");
let newTestItem3=document.createElement("var");
newTestItem3.innerHTML= `<h2>TestAnfang</h2>
<p>hallo Du da!</p>
<p>wie gehts dir?</p>
<h2>TesteEnde</h2>`;
newTest2.appendChild(newTestItem3);

const dataTest = {
    "name": "Neo",
    "job": "Killer",
    "updatedAt": "2020-06-14"
}
fetch ("https://reqres.in/api/users/2", {
    method: "PUT",
    headers: {"content-Type": "application/json" },
    body: JSON.stringify(dataTest)
}).then (response => response.json())
    .then (dataTest => console.log(dataTest, "Success"))
    .catch (error => console.log(error, "Error occured somewere"));
