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
        photo: " walter-gordon-office-manager.jpg"
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

for (let employee in team) {
    printOnConsole(team[employee].name, team[employee].role, team[employee].photo)
}

function printOnConsole(nome, ruolo, foto) {
    console.log(`
    Nome:   ${nome}
    Ruolo:  ${ruolo}
    Foto:   ${foto}
    
    `)
}
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe