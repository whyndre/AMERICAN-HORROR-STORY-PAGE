const temporadas = {
  "Temporada 1": {
    sinopse: "A primeira temporada acompanha a família Harmon, que se muda para uma casa assombrada por espíritos vingativos e segredos terríveis.",
    imagem: "../img/evan.png"
  },
  "Temporada 2": {
    sinopse: "Situada no Briarcliff Asylum, a segunda temporada envolve possessão, experimentos nazistas, serial killers e horrores psicológicos.",
    imagem: "../img/asylum.png"
  },
  "Temporada 3": {
    sinopse: "Centrada em um clã de bruxas em Nova Orleans, esta temporada explora poder, rivalidade e magia ancestral.",
    imagem: "../img/coven.png"
  },
  "Temporada 4": {
    sinopse: "Sinopse da temporada 4 aqui...",
    imagem: "../img/freakshow.png"
  },
  "Temporada 5": {
    sinopse: "Sinopse da temporada 5 aqui...",
    imagem: "../img/hotel.png"
  }
}; // <-- AQUI FECHA O OBJETO !!!

const select = document.getElementById("select-temporada");
const info = document.querySelector(".info-temporada");

select.addEventListener("change", () => {
  const escolhida = select.value;
  const temp = temporadas[escolhida];

  info.innerHTML = `
      <h2>${escolhida}</h2>
      <p>${temp.sinopse}</p>
      <img src="${temp.imagem}" alt="${escolhida}" style="width: 100%; margin-top: 15px; border-radius: 10px;">
  `;
});




