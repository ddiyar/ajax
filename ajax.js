'use strict';
const form = document.querySelector('#search-form'); // valitaan elementti mitä kuunnellaan
const main = document.querySelector('main');

form.addEventListener('submit', async (evt) => {
  evt.preventDefault(); // jotta submit ei vie uuteen sivuun
  try {
  const hakusana = document.querySelector('input[name=search-field]').value;
  const vastaus = await fetch('http://api.tvmaze.com/search/shows?q=' + hakusana);
  const sarjat = await vastaus.json();
  console.log(sarjat[0].show.name);

  sarjat.forEach((sarja) => {
    const html = `<article>
                    <h2>${sarja.show.name}</h2>
                    <a href="${sarja.show.officialSite}">Link to homepage</a>
                        <figure>
                            <img src="${sarja.show.image.medium}" alt="${sarja.show.name}">
                            <figcaption>${sarja.show.name}</figcaption>
                        </figure>
                        <p>${sarja.show.genres}</p>
                    </article>`;
    main.innerHTML += html;
}); // anonyymi funktio, käytetään vain listener
let kuva = 'http://placekitten.com/210/295';
if(sarja.show.image !== null) {
  kuva = sarja.show.image.medium;
};
  const figuret = document.querySelectorAll('figure');
  figuret.forEach((figure, index) => {
    figure.addEventListener('click', (evt)=>{})
    console.log(sarjat[index]);
  })

  } catch (e) {
    console.log(e.message);
  }
});
