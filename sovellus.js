const lomake = document.getElementById("lisayslomake");
const kentta = document.getElementById("uusi-tehtava");
const lista = document.getElementById("tehtavat");

let tehtavat = [];

function piirraLista() {
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
    return;
  }
  tehtavat.push({ teksti: teksti, tehty: false });
  kentta.value = "";
  piirraLista();
});
