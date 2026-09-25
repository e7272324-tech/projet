const prompt = require("prompt-sync")();
let candidat = {
    cin : "",
    nom : "",
    prenom : "",
    age : "",
    electeurs : []
}
function ajouterCandidat() {
    candidat.cin = prompt("Entrer le CIN du candidat :");
    candidat.nom = prompt("Entrer le nom du candidat :");
    candidat.prenom = prompt("Entrer le prenom du candidat :");
    candidat.age = prompt("Entrer l'age du candidat :");
return ajouterCandidat
}