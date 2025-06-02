"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fitness_ts_1 = require("./fitness.ts");
var napok = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];
var hetiAdatok = napok.map(function (nap) { return new fitness_ts_1.FitnessNap(nap); });
var aktNapIndex = 0;
//const celInput = document.getElementById("#kaloriacel") as HTMLInputElement;
var kaloriaInput = document.getElementById("egetett");
var hosszInput = document.getElementById("idotartam");
var pihenoCheckbox = document.getElementById("pihenonap");
var tevekenysegInput = document.getElementById("tevekenyseg");
var intenzitasInput = document.getElementById("intenzitas");
var kovetkezoGomb = document.querySelector("button.btn-primary");
var tablaBody = document.querySelector("tbody");
var progressBar = document.querySelector(".progress-bar");
frissitProgressBar();
kovetkezoGomb.addEventListener("click", function () {
    var aktNap = hetiAdatok[aktNapIndex];
    aktNap.pihenoNap = pihenoCheckbox.checked;
    aktNap.elegetettKaloria = Number(kaloriaInput.value) || 0;
    aktNap.edzesHossz = Number(hosszInput.value) || 0;
    aktNap.tevekenysegNev = tevekenysegInput.value || "";
    aktNap.edzesIntenzitasErtek = Number(intenzitasInput.value) || 3; // ÚJ sor
    var sor = document.createElement("tr");
    sor.innerHTML = "\n    <td>".concat(aktNap.napNeve, "</td>\n    <td>").concat(aktNap.elegetettKaloria, "</td>\n    <td>").concat(aktNap.edzesHossz, "</td>\n    <td>").concat(aktNap.edzesIntenzitas(), "</td>\n    <td>").concat(aktNap.pihenoNap ? "Igen" : "Nem", "</td>\n    <td>").concat(aktNap.tevekenysegNev || aktNap.tevekenyseg(), "</td>\n  ");
    tablaBody.appendChild(sor);
    aktNapIndex++;
    if (aktNapIndex >= napok.length) {
        kovetkezoGomb.disabled = true;
    }
    uritMezok();
    frissitProgressBar();
});
function frissitProgressBar() {
    var szelesseg = 100 / napok.length;
    progressBar.style.width = "".concat(szelesseg, "%");
    progressBar.style.marginLeft = "".concat(aktNapIndex * szelesseg, "%");
    progressBar.setAttribute("aria-valuenow", ((aktNapIndex + 1) / napok.length * 100).toFixed(0));
}
function uritMezok() {
    kaloriaInput.value = "";
    hosszInput.value = "";
    pihenoCheckbox.checked = false;
    tevekenysegInput.value = "";
    intenzitasInput.value = "3"; // ÚJ sor: visszaállít alapértelmezettre
    document.getElementById('intenzitas-ertek').textContent = "3"; // ÚJ sor: kijelzés frissítése
}
