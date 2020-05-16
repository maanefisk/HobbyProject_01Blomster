// model

const model = {
plants = [ 
    {name: "Salvie",
    id: "salvie",
    water: 7,
    feed: 14,
    cut: 14,
    newPot: 365,},

    {name: "Løvemunn",
    id: "lovemunn",
    water: 1,
    feed: 7,
    cut: 7,
    newPot: 365,}
    ]
};

var container = document.getElementById('container');
// controller
updateView();
function updateView() {

    let html = `

    <div id="date" class="date">
        ${todaysDate()}
    </div>

    <table id="plantsList" class="plantsList">
    <tr>
        <th>Plante</th>
        <th>Vanning</th>
        <th>Gjødsel</th>
        <th>Klipping</th>
        <th>Ompotting</th>
        <th>Utsett</th>
    </tr>
    </table>

    <div id="notepad" class="notepad">
        ${createNotepad()}
    </div>
    
    <input id="addPlantInput" class="addPlantInput" type="text" onchange="addPlant()"/>
    `;
for (let i = 0; i < plants.length; i++) {
html += createHtmlRow(i);
}
container.innerHTML = html;
}

function createHtmlRow(i) {
const plant = plants[i];
return `<table id="plantsList" class="plantsList">
        <tr>
            <th>Plante</th>
            <th>Vanning</th>
            <th>Gjødsel</th>
            <th>Klipping</th>
            <th>Ompotting</th>
            <th>Utsett</th>
        </tr>
        </table>
    `;
}

function todaysDate() {
console.log(new Date().toISOString().substr(0, 10));    
return new Date().toLocaleDateString();
}

function plantsList() {

}

function createNotepad() {
  
}

function addPlant() {

}