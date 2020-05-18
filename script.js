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
    html = container;
    html.innerHTML = `
    <div class="date">16.05.2020</div>
    `;
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