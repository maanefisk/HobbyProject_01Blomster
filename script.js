// model

const model = {
    todaysDate: "",

    plants: [
        { 
            id: "salvie", name: 'Salvie', 
            tasks: {
                water: { frequencyDays: 1, lastDate: '2020-05-15'},
            },
        },
        {
            id: "lovemunn", name: 'Løvemunn',
            tasks: {
                water: { frequencyDays: 1, lastDate: '2020-05-15'},
            },
        },
    ],
};

// controller
function updateView() {
    document.getElementById('container').innerHTML = `
    <div class="date">
        ${todaysDate()}
    </div>
    <div class="plantsList">
        ${plantsList()}
    </div>
    <div class="notepad">
        ${createNotepad()}
    </div>
    <input class="addPlantInput" type="text" onchange="addPlant()"/>
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