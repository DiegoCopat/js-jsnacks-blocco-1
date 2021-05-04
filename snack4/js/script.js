// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

var nomi = ["Marco", "Giovanni", "Lucia", "Giada", "Eleonora", "Paolo", "Giovanna", "Luca", "Enrico", "Raffaella"];
var cognomi = ["Paoli", "Copat", "Benedetti", "Filippi", "Bertolini"];
console.log(nomi);
console.log(cognomi);

var nomi = generatoreDiNomi(nomi, cognomi);

// sezione dedicata alle funzioni
function sceltaNome (nome) {
    return nome[parseInt(Math.floor((Math.random() * 10 )))]
}
function sceltaCognome (nome) {
    return nome[parseInt(Math.floor((Math.random() * 5 )))];
}
function generatoreDiNomi (nome1, nome2) {

    for (var i = 0; i < 10; i++) {
        lista = sceltaNome (nomi) + " " + sceltaCognome (cognomi);
        document.getElementById("lista").innerHTML+="<li>" + lista + "</li>";
    }
}