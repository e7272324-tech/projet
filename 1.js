const prompt = require("prompt-sync")();
let candidat = {
    cin : "",
    nom : "",
    prenom : "",
    partiPolitique : "",
    age : "",
    electeurs : []
} ;
function ajouterCandidat(){
    // console.log("dddd")
    candidat.cin = prompt("Entrer le Cin du candidat :");
    candidat.nom = prompt("Entrer le Nom du candidat :");
    candidat.prenom = prompt("Entrer le Prenom du candidat :");
    candidat.partiPolitique = prompt("Entrer le PartiPolitique du candidat :");
    if(candidat.partiPolitique.trim() == ""){
        candidat.partiPolitique = "indépedant"
    }
    candidat.age = prompt("Entrer l'age du candidat :");
    candidat.electeurs = [];
    return candidat
}

console.log(ajouterCandidat())
 