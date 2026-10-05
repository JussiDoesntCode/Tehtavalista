const lomake = document.getElementById("lisayslomake");
const kentta = document.getElementById("uusi-tehtava");
const lista = document.getElementById("tehtavat");

const TALLENNUSAVAIN = "tehtavalista";

let tehtavat = lataaTehtavat();

function lataaTehtavat() {
  try {
    const tallennetut = localStorage.getItem(TALLENNUSAVAIN);
    return tallennetut ? JSON.parse(tallennetut) : [];
  } catch (virhe) {
    return [];
  }
}

function tallennaTehtavat() {
  try {
    localStorage.setItem(TALLENNUSAVAIN, JSON.stringify(tehtavat));
  } catch (virhe) {
    // Tallennus ei onnistu esimerkiksi yksityisessä selausikkunassa.
  }
}

function piirraLista() {
  tallennaTehtavat();
  lista.innerHTML = "";
  tehtavat.forEach(function (tehtava, indeksi) {
    const rivi = document.createElement("li");
    if (tehtava.tehty) {
      rivi.classList.add("tehty");
    }

    const valinta = document.createElement("input");
    valinta.type = "checkbox";
    valinta.checked = tehtava.tehty;
    valinta.addEventListener("change", function () {
      tehtava.tehty = valinta.checked;
      piirraLista();
    });

    const teksti = document.createElement("span");
    teksti.textContent = tehtava.teksti;

    const poista = document.createElement("button");
    poista.textContent = "Poista";
    poista.addEventListener("click", function () {
      tehtavat.splice(indeksi, 1);
      piirraLista();
    });

    rivi.appendChild(valinta);
    rivi.appendChild(teksti);
    rivi.appendChild(poista);
    lista.appendChild(rivi);
  });
}

lomake.addEventListener("submit", function (tapahtuma) {
  tapahtuma.preventDefault();
  const teksti = kentta.value.trim();
  if (teksti === "") {
    kentta.value = "";
    return;
  }
  tehtavat.push({ teksti: teksti, tehty: false });
  kentta.value = "";
  piirraLista();
});

piirraLista();
