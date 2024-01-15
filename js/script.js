console.log("JS OK");

// elementi del DOM

const cardsArea = document.getElementById("team-cards");

// Array dati

const teamMembers = [
    {
        name: "Wayne Barnett",
        position: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        position: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        position: "Office Manager",
        photo: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        position: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        position: "Developer",
        photo: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        position: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg",
    },
]

for (member of teamMembers){
    console.log(member)
}

// stampo in pagina sottoforma di stringa

for (let i=0 ; i < teamMembers.length ; i++){
    
    const card = 
    `
    <div class="col-4 p-3">
        <div class="card">
            <img src="./img/${teamMembers[i].photo}" class="card-img-top">
            <div class="card-body text-center flex-center">
                <h3 class="card-text w-100">${teamMembers[i].name}</h3>
                <div class="card-text">${teamMembers[i].position}</div>
            </div>
        </div>
    </div>
    `;
    cardsArea.innerHTML += card;
}