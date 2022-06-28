// Consegna
// Viene fornita una piccola tabella che rappresenta i membri di un team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// Completate i milestone nell'ordine assegnato, non andate avanti finché non avete concluso con successo la milestone precedente.
// Chiudete almeno una commit per milestone.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

const team = [{
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
    }
];

// for (let employee in team) {
//     printOnConsole(team[employee].name, team[employee].role, team[employee].photo)
// }



function printOnConsole() {
    for (let employee in team) {
        console.log(`
        Nome:   ${team[employee].name}
        Ruolo:  ${team[employee].role}
        Foto:   ${team[employee].photo}
        
        `)
    }
}
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

let teamElement = document.getElementById("team");
printOnDom();
printOnConsole();

//Bonus 1 Trasformare la stringa foto in una immagine effettiva

// function printOnDom(nome, ruolo, foto) {
//     teamElement.innerHTML += `
//     <div>Nome:   ${nome}</div> 
//     <div>Ruolo:  ${ruolo}</div> 
//     <img src="./img/${foto}"><br>
//     `;
// }

//Bonus 2 Organizzare i singoli membri in card/schede



// let str = 'JavaScript String Startswith';

// console.log(str.startsWith('Java'));


function printOnDom() {
    //svuoto le informazioni che ci sono prima di ogni nuova stampa
    teamElement.innerHTML = "";
    for (employee in team) {
        if ((team[employee].photo).includes('http')) {

            console.log("sono nell'if");

            teamElement.innerHTML += `
                <div class="col-4 mt-3 d-flex justify-content-center">
                    <div class="card" style="width: 18rem;">
                        <img src="${team[employee].photo}" class="card-img-top" alt="foto di ${team[employee].name} ">
                        <div class="card-body">
                            <h5 class="card-title">${team[employee].name}</h5>
                            <p class="card-text">${team[employee].role}</p>
                        </div> 
                    </div>
                </div>
                `;
        } else {

            console.log("sono nell'else");
            console.log(teamElement.innerHTML);

            teamElement.innerHTML += `
            <div class="col-4 mt-3 d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                    <img src="./img/${team[employee].photo}" class="card-img-top" alt="foto di ${team[employee].name} ">
                    <div class="card-body">
                        <h5 class="card-title">${team[employee].name}</h5>
                        <p class="card-text">${team[employee].role}</p>
                    </div> 
                </div>
            </div>
            `;
        }
    }
}

//Bonus 3 Inserisci un nuovo impiegato tramite form

const insertANewEmployeeButton = document.getElementById("insertEmployee");

insertANewEmployeeButton.addEventListener('click', function() {
    //estrai i dati
    console.log(insertANewEmployeeButton);
    const newName = document.getElementById("newName");
    const newRole = document.getElementById("newRole");
    const newUrl = document.getElementById("newUrl");

    //inserisci nell'array

    insertInDatabase(newName.value, newRole.value, newUrl.value);

    //stampali
    printOnDom();

    printOnConsole();
})


function insertInDatabase(nome, ruolo, url) {

    newItem = {
        name: nome,
        role: ruolo,
        photo: url
    }

    team.push(newItem);

}