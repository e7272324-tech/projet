const prompt = require("prompt-sync")();

    let candidatList = [];
    const num = parseInt(prompt("num ?"))
for (let i = 0; i < num; i++) {
    console.log("*")
    ajouterCandidat()
    console.log(candidatList)
}
function ajouterCandidat(){
    const cin = prompt("Entrer le cin du candidat :");
    const nom = prompt("Entrer le nom du candidat :");
    const prenom = prompt("Entrer le prenom du candidat :");
    let partiPolitique = prompt("Entrer le partiPolitique du candidat :");
     if(partiPolitique.trim() == ""){
        partiPolitique = "indépedant"
    }
    const age = parseInt(prompt("Entrer l'age du candidat :"));
    const electeurs = [];
    let candidat = {
        CIN: cin,Nom: nom,Prenom: prenom,Parti_Politique: partiPolitique,Age: age,Electeurs: electeurs
    }
    candidatList.push(candidat)
};
ajouterCandidat()
console.log(candidatList)