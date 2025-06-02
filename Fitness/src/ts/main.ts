import { FitnessNap } from "./fitness.ts";

const napok = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];
const hetiAdatok: FitnessNap[] = napok.map(nap => new FitnessNap(nap));
let aktNapIndex = 0;
//const celInput = document.getElementById("#kaloriacel") as HTMLInputElement;
const kaloriaInput = document.getElementById("egetett") as HTMLInputElement;
const hosszInput = document.getElementById("idotartam") as HTMLInputElement;
const pihenoCheckbox = document.getElementById("pihenonap") as HTMLInputElement;
const tevekenysegInput = document.getElementById("tevekenyseg") as HTMLInputElement;
const intenzitasInput = document.getElementById("intenzitas") as HTMLInputElement;
const kovetkezoGomb = document.querySelector("button.btn-primary") as HTMLButtonElement;
const tablaBody = document.querySelector("tbody") as HTMLTableSectionElement;
const progressBar = document.querySelector(".progress-bar") as HTMLElement;

frissitProgressBar();

kovetkezoGomb.addEventListener("click", () => {
  const aktNap = hetiAdatok[aktNapIndex];

  aktNap.pihenoNap = pihenoCheckbox.checked;
  aktNap.elegetettKaloria = Number(kaloriaInput.value) || 0;
  aktNap.edzesHossz = Number(hosszInput.value) || 0;
  aktNap.tevekenysegNev = tevekenysegInput.value || "";
  aktNap.edzesIntenzitasErtek = Number(intenzitasInput.value) || 3; // ÚJ sor

  const sor = document.createElement("tr");
  sor.innerHTML = `
    <td>${aktNap.napNeve}</td>
    <td>${aktNap.elegetettKaloria}</td>
    <td>${aktNap.edzesHossz}</td>
    <td>${aktNap.edzesIntenzitas()}</td>
    <td>${aktNap.pihenoNap ? "Igen" : "Nem"}</td>
    <td>${aktNap.tevekenysegNev || aktNap.tevekenyseg()}</td>
  `;
  tablaBody.appendChild(sor);
  aktNapIndex++;
  if (aktNapIndex >= napok.length) {
    kovetkezoGomb.disabled = true;
  }
  uritMezok();
  frissitProgressBar();
});

function frissitProgressBar() {
  const szelesseg = 100 / napok.length;
  progressBar.style.width = `${szelesseg}%`;
  progressBar.style.marginLeft = `${aktNapIndex * szelesseg}%`;
  progressBar.setAttribute("aria-valuenow", ((aktNapIndex + 1) / napok.length * 100).toFixed(0));
}

function uritMezok() {
  kaloriaInput.value = "";
  hosszInput.value = "";
  pihenoCheckbox.checked = false;
  tevekenysegInput.value = "";
  intenzitasInput.value = "3"; // ÚJ sor: visszaállít alapértelmezettre
  document.getElementById('intenzitas-ertek')!.textContent = "3"; // ÚJ sor: kijelzés frissítése
}
