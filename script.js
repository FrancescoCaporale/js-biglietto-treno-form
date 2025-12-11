// Recupero gli input dalla pagina
const kmInput = document.getElementById("km");
const etaInput = document.getElementById("eta");
const button = document.getElementById("calcola");

// Quando clicco il bottone leggo i valori inseriti
button.addEventListener("click", function() {

    const km = Number(kmInput.value);
    const eta = Number(etaInput.value);

    console.log("Km inseriti:", km);
    console.log("Età inserita:", eta);

    // Qui nella seconda parte farò i calcoli del biglietto
});