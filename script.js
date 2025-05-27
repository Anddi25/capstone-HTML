const speakers = [
  {
    name: 'Liliana Ruiz',
    image: 'img/speaker1.jpg',
    event: 'INVIMA: Everything you need to know about the cosmetics regulator.',
    description: 'Clinical microbiology specialist with more than 10 years of experience.',
  },
  {
    name: 'Carlos Gómez',
    image: 'img/speaker2.jpg',
    event: 'Green cosmetics: the new trend in skin care.',
    description: 'Researcher in environmental biotechnology and international speaker.',
  },
  {
    name: 'Ana Torres',
    image: 'img/speaker3.jpg',
    event: 'Importance of stability studies in the development of new cosmetic products.',
    description: 'PhD in analytical chemistry focused on microbiological processes.',
  },
];

const container = document.getElementById('cards-container');

speakers.forEach((speaker) => {
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
