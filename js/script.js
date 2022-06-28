// Consegna
// Viene fornita una piccola tabella che rappresenta i membri di un team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// Completate i milestone nell'ordine assegnato, non andate avanti finché non avete concluso con successo la milestone precedente.
// Chiudete almeno una commit per milestone.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

team = [{
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Founder & CEO",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    },
]

// for (let employee in team) {
//     printOnConsole(team[employee].name, team[employee].role, team[employee].photo)
// }

function printOnConsole(nome, ruolo, foto) {
    console.log(`
    Nome:   ${nome}
    Ruolo:  ${ruolo}
    Foto:   ${foto}
    
    `)
}
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

const teamElement = document.getElementById("team");

for (let employee in team) {
    printOnDom(team[employee].name, team[employee].role, team[employee].photo)
}

//Bonus 1 Trasformare la stringa foto in una immagine effettiva

// function printOnDom(nome, ruolo, foto) {
//     teamElement.innerHTML += `
//     <div>Nome:   ${nome}</div> 
//     <div>Ruolo:  ${ruolo}</div> 
//     <img src="./img/${foto}"><br>
//     `;
// }

//Bonus 2 Organizzare i singoli membri in card/schede

function printOnDom(nome, ruolo, foto) {
    teamElement.innerHTML += `
    <div class="col-4 mt-3 d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
            <img src="./img/${foto}" class="card-img-top" alt="foto di ${nome} ">
            <div class="card-body">
                <h5 class="card-title">${nome}</h5>
                <p class="card-text">${ruolo}.</p>
            </div> 
        </div>
    </div>
    `;
}