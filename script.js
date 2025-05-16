const speakers = [
{
    name: "Liliana Ruiz",
    image: "img/speaker1.jpg",
    event: "INVIMA: Todo lo que necesitas saber sobre el ente regulador.",
    description: "Especialista en microbiología clínica con más de 10 años de experiencia.",
},
{
    name: "Carlos Gómez",
    image: "img/speaker2.jpg",
    event: "Cosmética verde: la nueva tendencia para el cuidado de la piel.",
    description: "Investigador en biotecnología ambiental y ponente internacional.",
},
{
    name: "Ana Torres",
    image: "img/speaker3.jpg",
    event: "Importancia de los estudios de estabilidad en el desarrollo de nuevos productos cosméticos.",
    description: "Doctora en química analítica enfocada en procesos microbiológicos.",
}
];

const container = document.getElementById('cards-container');

speakers.forEach(speaker => {
container.innerHTML += `
    <div class="col-12 col-md-6 d-flex justify-content-center">
    <div class="card mb-3" style="max-width: 540px; width: 100%;">
        <div class="row g-0">
        <div class="col-md-4 d-flex align-items-center">
            <img src="${speaker.image}" class="img-fluid rounded-start" alt="${speaker.name}">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${speaker.name}</h5>
            <p class="card-text">${speaker.event}</p>
            <p class="card-text"><small class="text-muted">${speaker.description}</small></p>
            </div>
        </div>
        </div>
    </div>
    </div>
`;
});
