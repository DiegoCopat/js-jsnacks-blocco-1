/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
Stampa l'array nella console. */

var arrayDispari = [];
var arrayPari = [];
var num;

var numeriDispari = verificaNumero (num);
var numeriPari = verificaNumero (num);

document.getElementById("num-dispari").innerHTML = "Questi sono i numeri dispari che hai scritto:" + arrayDispari;
console.log("Questi sono i numeri dispari che hai scritto:" + arrayDispari);
document.getElementById("num-pari").innerHTML = "Questi sono i numeri pari che hai scritto:" + arrayPari;
console.log("Questi sono i numeri pari che hai scritto:" + arrayPari);

// sezione dedicate alle funzioni
function verificaNumero (num) {

    for (var i = 0; i < 3; i++) {
        num = parseInt(prompt("inserisci qui un numero")); 
        if (num % 2 !== 0) {
            arrayDispari.push(" " + num);
        }else {
            arrayPari.push(" " + num);
        }
    }
}