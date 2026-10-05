const lomake = document.getElementById("lisayslomake");
const kentta = document.getElementById("uusi-tehtava");
const lista = document.getElementById("tehtavat");

let tehtavat = [];

function piirraLista() {
  lista.innerHTML = "";
  for (const tehtava of tehtavat) {
    const rivi = document.createElement("li");
    const teksti = document.createElement("span");
    teksti.textContent = tehtava.teksti;
    rivi.appendChild(teksti);
    lista.appendChild(rivi);
  }
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
