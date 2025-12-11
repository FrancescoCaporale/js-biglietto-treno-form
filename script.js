// Recupero gli input dalla pagina
const kmInput = document.getElementById("km");
const etaInput = document.getElementById("eta");
const button = document.getElementById("calcola");

// Quando clicco il bottone leggo i valori inseriti
button.addEventListener("click", function () {

    const km = Number(kmInput.value);
    const eta = Number(etaInput.value);

    console.log("Km inseriti:", km);
    console.log("Età inserita:", eta);

    // Recupero gli input dalla pagina
    const kmInput = document.getElementById("km");
    const etaInput = document.getElementById("eta");
    const button = document.getElementById("calcola");

    // Quando clicco il bottone leggo i valori inseriti
    button.addEventListener("click", function () {

        const km = Number(kmInput.value);
        const eta = Number(etaInput.value);

        console.log("Km inseriti:", km);
        console.log("Età inserita:", eta);

        // Prezzo base del biglietto
        let prezzo = km * 0.21;

        // Applicazione sconti
        if (eta < 18) {
            prezzo *= 0.8;   // sconto 20%
            console.log("Sconto minorenne applicato");
        } else if (eta > 65) {
            prezzo *= 0.6;   // sconto 40%
            console.log("Sconto over 65 applicato");
        } else {
            console.log("Nessuno sconto applicato");
        }

        // Formattazione a due decimali
        const finalPrice = prezzo.toFixed(2);

        // Output finale
        console.log("Prezzo finale:", finalPrice + "€");
    });

});











