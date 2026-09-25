const prompt = require("prompt-sync")();
let candidat = {
    cin : "",
    nom : "",
    prenom : "",
    partiPolitique : "",
    age : "",
    electeurs : []
} ;
function ajouterCandidt(){
    candidat.cin = prompt("Entrer le Cin du candidat :");
    candidat.nom = prompt("Entrer le Nom du candidat :");
    candidat.prenom = prompt("Entrer le Prenom du candidat :");
    candidat.partiPolitique = prompt("Entrer la partiPolitique du candidat :");
    candidat.age = prompt("Entrer l'age du candidat :");
    candidat.electeurs = []
    return ajouterCandidat
}