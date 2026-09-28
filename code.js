// 1. Ajouter un nouveau candidat : 
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
//  2. Ajouter plusieurs candidats à la fois.
// const prompt = require("prompt-sync")();

    let candidatList = []
    const num = parseInt(prompt("num ?"))
for (let i = 0; i < num; i++) {
    console.log("--------------------------------")
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
// 3. Afficher la liste des candidats : 
// const prompt = require("prompt-sync")();
// const candidat = [{Cin: "bh001", Nom: "Alami", Prénom: "Yassine", Parti_politique: "Parti du Renouveau", Âge: 42, Electeurs:[ "bh000"]},{
// Cin: "bh002", Nom: "Benjelloun", Prénom: "Salma", Parti_politique: "Alliance Citoyenne", Âge: 36, Electeurs: ["kj123", "mn4521" , "rt789", "xp0012"]},{
// Cin: "bh003", Nom: "El Mansouri", Prénom: "Karim", Parti_politique: "Parti de l'Avenir", Âge: 51, Electeurs: ["fg0000","az456", "qw7834"]},{
// Cin: "bh004", Nom: "Idrissi", Prénom: "Lina", Parti_politique: "Mouvement Progressiste", Âge: 29, Electeurs: ["pl321", "yu6547"]},{
// Cin: "bh005", Nom: "Tazi", Prénom: "Amine", Parti_politique: "Parti du Renouveau", Âge: 47, Electeurs: ["dc987", "hk2345","we159", "lo8765","nm753", "bc1029"]},{
// Cin: "bh006", Nom: "Berrada", Prénom: "Nadia", Parti_politique: "Alliance Citoyenne", Âge: 39, Electeurs: ["er246", "ty5318","er246", "ty5318","qa214"]},{
// Cin: "bh007", Nom: "Chraibi", Prénom: "Mehdi", Parti_politique: "Parti de l'Avenir", Âge: 33, Electeurs: ["ws639", "ed7412","rf825", "tg3964","yh472", "uj8153","ik956"]},{
// Cin: "bh008", Nom: "Alaoui", Prénom: "Imane", Parti_politique: "Mouvement Progressiste", Âge: 45, Electeurs: ["ab214", "cd5831", "ef639", "gh7412", "ij825", "kl3964", "mn472", "op8153"]},{
// Cin: "bh009", Nom: "Bennani", Prénom: "Omar", Parti_politique: "Parti du Renouveau", Âge: 58, Electeurs: ["qr956", "st2478", "uv381", "wx6295", "yz714", "aa3582", "bb263", "cc9471", "dd548"]},{
// Cin: "bh010", Nom: "Skalli", Prénom: "Sara", Parti_politique: "Alliance Citoyenne", Âge: 31, Electeurs: ["hk183", "lm7294", "np456", "qr8127", "st365", "uv9402", "wx5717"]}]
function Afficher(tableau,i){
    console.log(`Cin :${tableau[i].Cin},Nom :${tableau[i].Nom},Prenom :${tableau[i].Prénom},PartiPolitique : ${tableau[i].Parti_politique},age : ${tableau[i].Âge},Electeurs : ${tableau[i].Electeurs.length}`)
}
function choisir(){
    console.log(`Choisez 1 pour Trier les candidats par nombre de votes.\nChoisez 2 pour Filtrer et afficher uniquement les candidats d'un parti politique spécifique.`);
    const choix = parseInt(prompt("Entrez votre choix :"))
    switch(choix){
        case 1 :
            const Tri = [...candidat]
                for (let i=0;i<Tri.length;i++){
                    for(let j=i+1;j<Tri.length;j++){
                        if(Tri[i].Electeurs.length<Tri[j].Electeurs.length){
                            swp = Tri[i]
                            Tri [i] = Tri[j]
                            Tri [j] = swp
                        }
                    }
                    console.log("i = "+i)
                    Afficher(Tri,i)
                }
            break
        case 2 :
            const choix_politique = prompt("Choisez la parti politique : ")
                for (i=0;i<candidat.length;i++){
                    if(candidat[i].Parti_politique === choix_politique){
                        Afficher(candidat,i)
                    }
                }
            break
        default :
            console.log("Choix incorrect")
        }
}
choisir()
// 4. Voter pour un candidat : 
// const prompt = require("prompt-sync")();
// const candidat = [{Cin: "bh001", Nom: "Alami", Prénom: "Yassine", Parti_politique: "Parti du Renouveau", Âge: 42, Electeurs:[ "bh000"]},{
// Cin: "bh002", Nom: "Benjelloun", Prénom: "Salma", Parti_politique: "Alliance Citoyenne", Âge: 36, Electeurs: ["kj123", "mn4521" , "rt789", "xp0012"]},{
// Cin: "bh003", Nom: "El Mansouri", Prénom: "Karim", Parti_politique: "Parti de l'Avenir", Âge: 51, Electeurs: ["fg0000","az456", "qw7834"]},{
// Cin: "bh004", Nom: "Idrissi", Prénom: "Lina", Parti_politique: "Mouvement Progressiste", Âge: 29, Electeurs: ["pl321", "yu6547"]},{
// Cin: "bh005", Nom: "Tazi", Prénom: "Amine", Parti_politique: "Parti du Renouveau", Âge: 47, Electeurs: ["dc987", "hk2345","we159", "lo8765","nm753", "bc1029"]},{
// Cin: "bh006", Nom: "Berrada", Prénom: "Nadia", Parti_politique: "Alliance Citoyenne", Âge: 39, Electeurs: ["er246", "ty5318","er246", "ty5318","qa214"]},{
// Cin: "bh007", Nom: "Chraibi", Prénom: "Mehdi", Parti_politique: "Parti de l'Avenir", Âge: 33, Electeurs: ["ws639", "ed7412","rf825", "tg3964","yh472", "uj8153","ik956"]},{
// Cin: "bh008", Nom: "Alaoui", Prénom: "Imane", Parti_politique: "Mouvement Progressiste", Âge: 45, Electeurs: ["ab214", "cd5831", "ef639", "gh7412", "ij825", "kl3964", "mn472", "op8153"]},{
// Cin: "bh009", Nom: "Bennani", Prénom: "Omar", Parti_politique: "Parti du Renouveau", Âge: 58, Electeurs: ["qr956", "st2478", "uv381", "wx6295", "yz714", "aa3582", "bb263", "cc9471", "dd548"]},{
// Cin: "bh010", Nom: "Skalli", Prénom: "Sara", Parti_politique: "Alliance Citoyenne", Âge: 31, Electeurs: ["hk183", "lm7294", "np456", "qr8127", "st365", "uv9402", "wx5717"]}]
function Voter(){
    const CIN = prompt("Entrez votre CIN : ")
    for(i=0;i<candidat.length;i++){
        for (j=0;j<candidat[i].Electeurs.length;j++){
            if (CIN === candidat[i].Electeurs[j]){
                return console.log ("Le CIN a déjà été déclaré")
            }
        }
    }
    const l_identifiant = prompt("Entrez la CIN du candidat pour lequel vous voulez voter : ")
    for(i=0;i<candidat.length;i++){
        if (l_identifiant == candidat[i].Cin){
            candidat[i].Electeurs.push(CIN)
            console.log(Candidat[i])
            break
        }else{
            console.log("Le candidat que vous choisez n'exist pas .");
            break
        }
    }
}
Voter()
// 5. Modifier les informations d'un candidat : 
// const prompt = require("prompt-sync")();
// const candidat = [{Cin: "bh001", Nom: "Alami", Prénom: "Yassine", Parti_politique: "Parti du Renouveau", Âge: 42, Electeurs:[ "bh000"]},{
// Cin: "bh002", Nom: "Benjelloun", Prénom: "Salma", Parti_politique: "Alliance Citoyenne", Âge: 36, Electeurs: ["kj123", "mn4521" , "rt789", "xp0012"]},{
// Cin: "bh003", Nom: "El Mansouri", Prénom: "Karim", Parti_politique: "Parti de l'Avenir", Âge: 51, Electeurs: ["fg0000","az456", "qw7834"]},{
// Cin: "bh004", Nom: "Idrissi", Prénom: "Lina", Parti_politique: "Mouvement Progressiste", Âge: 29, Electeurs: ["pl321", "yu6547"]},{
// Cin: "bh005", Nom: "Tazi", Prénom: "Amine", Parti_politique: "Parti du Renouveau", Âge: 47, Electeurs: ["dc987", "hk2345","we159", "lo8765","nm753", "bc1029"]},{
// Cin: "bh006", Nom: "Berrada", Prénom: "Nadia", Parti_politique: "Alliance Citoyenne", Âge: 39, Electeurs: ["er246", "ty5318","er246", "ty5318","qa214"]},{
// Cin: "bh007", Nom: "Chraibi", Prénom: "Mehdi", Parti_politique: "Parti de l'Avenir", Âge: 33, Electeurs: ["ws639", "ed7412","rf825", "tg3964","yh472", "uj8153","ik956"]},{
// Cin: "bh008", Nom: "Alaoui", Prénom: "Imane", Parti_politique: "Mouvement Progressiste", Âge: 45, Electeurs: ["ab214", "cd5831", "ef639", "gh7412", "ij825", "kl3964", "mn472", "op8153"]},{
// Cin: "bh009", Nom: "Bennani", Prénom: "Omar", Parti_politique: "Parti du Renouveau", Âge: 58, Electeurs: ["qr956", "st2478", "uv381", "wx6295", "yz714", "aa3582", "bb263", "cc9471", "dd548"]},{
// Cin: "bh010", Nom: "Skalli", Prénom: "Sara", Parti_politique: "Alliance Citoyenne", Âge: 31, Electeurs: ["hk183", "lm7294", "np456", "qr8127", "st365", "uv9402", "wx5717"]}]
function Modifier(){
    console.log(`Choisez 1 pour Modifier le parti politique d'un candidat.\nChoisez 2 pour Modifier l'âge d'un candidat.`);
    const Choix = parseInt(prompt("Entrez votre choix :"))
    switch(Choix){
        case 1:
            let CIN1 = prompt("Entrez le CIN du candidat : ")
            for(let i = 0; i < candidat.length; i++){
                if(candidat[i].Cin == CIN1){
                    let Modification = prompt("Entrez le nouveau parti politique : ")
                    candidat[i].Parti_politique = Modification
                    break
                }else if (i+1==candidat.length){
                    console.log ("Le candidat que vous choisez n'exist pas .")
                }
            }
            break
        case 2:
            let CIN2 = prompt("Entrez le CIN du candidat : ")
            let j=0
            for(let j = 0; j < candidat.length; j++){
                if(candidat[j].Cin == CIN2){
                    let Modification = parseInt(prompt("Entrez le nouveau âge : "))
                    candidat[j].Âge = Modification
                    break
                }else if (j+1==CIN2.length){
                    console.log("Le candidat que vous choisez n'exist pas .")
                }
            }
            break
        default :
            console.log("Choix incorrect")
            return Modifier()
    }
}
Modifier()
// 6. Supprimer un candidat : 
// const prompt = require("prompt-sync")();
// const candidat = [{Cin: "bh001", Nom: "Alami", Prénom: "Yassine", Parti_politique: "Parti du Renouveau", Âge: 42, Electeurs:[ "bh000"]},{
// Cin: "bh002", Nom: "Benjelloun", Prénom: "Salma", Parti_politique: "Alliance Citoyenne", Âge: 36, Electeurs: ["kj123", "mn4521" , "rt789", "xp0012"]},{
// Cin: "bh003", Nom: "El Mansouri", Prénom: "Karim", Parti_politique: "Parti de l'Avenir", Âge: 51, Electeurs: ["fg0000","az456", "qw7834"]},{
// Cin: "bh004", Nom: "Idrissi", Prénom: "Lina", Parti_politique: "Mouvement Progressiste", Âge: 29, Electeurs: ["pl321", "yu6547"]},{
// Cin: "bh005", Nom: "Tazi", Prénom: "Amine", Parti_politique: "Parti du Renouveau", Âge: 47, Electeurs: ["dc987", "hk2345","we159", "lo8765","nm753", "bc1029"]},{
// Cin: "bh006", Nom: "Berrada", Prénom: "Nadia", Parti_politique: "Alliance Citoyenne", Âge: 39, Electeurs: ["er246", "ty5318","er246", "ty5318","qa214"]},{
// Cin: "bh007", Nom: "Chraibi", Prénom: "Mehdi", Parti_politique: "Parti de l'Avenir", Âge: 33, Electeurs: ["ws639", "ed7412","rf825", "tg3964","yh472", "uj8153","ik956"]},{
// Cin: "bh008", Nom: "Alaoui", Prénom: "Imane", Parti_politique: "Mouvement Progressiste", Âge: 45, Electeurs: ["ab214", "cd5831", "ef639", "gh7412", "ij825", "kl3964", "mn472", "op8153"]},{
// Cin: "bh009", Nom: "Bennani", Prénom: "Omar", Parti_politique: "Parti du Renouveau", Âge: 58, Electeurs: ["qr956", "st2478", "uv381", "wx6295", "yz714", "aa3582", "bb263", "cc9471", "dd548"]},{
// Cin: "bh010", Nom: "Skalli", Prénom: "Sara", Parti_politique: "Alliance Citoyenne", Âge: 31, Electeurs: ["hk183", "lm7294", "np456", "qr8127", "st365", "uv9402", "wx5717"]}]
function Supprimer(){
    const CIN = prompt("Entrez le CIN que vous voulez supprimer : ")
    for (i=0;i<candidat.length;i++){
        if (candidat[i].Cin == CIN){
            console.log("--------------------------------")
            console.log("Voulez-vous supprimer ce candidat ?\n")
            // Afficher(candidat,i)
            console.log("--------------------------------")
            console.log("choisez 1 pour \"OUI\nchoisez 2 pour \"NO\"\nchoisez autre chose pour quitter");      
            const Choix = parseInt(prompt("=>"))
            switch(Choix) {
            case 1 :
                console.log(candidat)
                break
            case 2 :
                Supprimer()
                break
            default :
                console.log("EXIT")
            }
        }else if(i+1==candidat.length){
            console.log ("Le candidat que vous choisez n'exist pas .")
        }
    }
}
Supprimer()
// 7. Rechercher des candidats : 
// const prompt = require("prompt-sync")();
const Candidat = [{Cin: "bh001", Nom: "Alami", Prénom: "Yassine", Parti_politique: "Parti du Renouveau", Âge: 42, Electeurs:[ "bh000"]},{
Cin: "bh002", Nom: "Benjelloun", Prénom: "Salma", Parti_politique: "Alliance Citoyenne", Âge: 36, Electeurs: ["kj123", "mn4521" , "rt789", "xp0012"]},{
Cin: "bh003", Nom: "El Mansouri", Prénom: "Karim", Parti_politique: "Parti de l'Avenir", Âge: 51, Electeurs: ["fg0000","az456", "qw7834"]},{
Cin: "bh004", Nom: "Idrissi", Prénom: "Lina", Parti_politique: "Mouvement Progressiste", Âge: 29, Electeurs: ["pl321", "yu6547"]},{
Cin: "bh005", Nom: "Tazi", Prénom: "Amine", Parti_politique: "Parti du Renouveau", Âge: 47, Electeurs: ["dc987", "hk2345","we159", "lo8765","nm753", "bc1029"]},{
Cin: "bh006", Nom: "Berrada", Prénom: "Nadia", Parti_politique: "Alliance Citoyenne", Âge: 39, Electeurs: ["er246", "ty5318","er246", "ty5318","qa214"]},{
Cin: "bh007", Nom: "Chraibi", Prénom: "Mehdi", Parti_politique: "Parti de l'Avenir", Âge: 33, Electeurs: ["ws639", "ed7412","rf825", "tg3964","yh472", "uj8153","ik956"]},{
Cin: "bh008", Nom: "Alaoui", Prénom: "Imane", Parti_politique: "Mouvement Progressiste", Âge: 45, Electeurs: ["ab214", "cd5831", "ef639", "gh7412", "ij825", "kl3964", "mn472", "op8153"]},{
Cin: "bh009", Nom: "Bennani", Prénom: "Omar", Parti_politique: "Parti du Renouveau", Âge: 58, Electeurs: ["qr956", "st2478", "uv381", "wx6295", "yz714", "aa3582", "bb263", "cc9471", "dd548"]},{
Cin: "bh010", Nom: "Skalli", Prénom: "Sara", Parti_politique: "Alliance Citoyenne", Âge: 31, Electeurs: ["hk183", "lm7294", "np456", "qr8127", "st365", "uv9402", "wx5717"]}]
function Afficher(tableau,i){
    console.log(`Cin :${tableau[i].Cin},Nom :${tableau[i].Nom},Prenom :${tableau[i].Prénom},PartiPolitique : ${tableau[i].Parti_politique},age : ${tableau[i].Âge},Electeurs : ${tableau[i].Electeurs.length}`)
}
function Rechercher() {
    const Nom = prompt("Saisissez le nom du candidat que vous souhaitez rechercher : ")
    const indice = Candidat.findIndex(c => c.Nom.toUpperCase() === Nom.toUpperCase())
    if (indice !== -1) {
        console.log("--------------------------------");
        Afficher(Candidat,indice)
        console.log("--------------------------------");
    } else {
        console.log("Le candidat que vous choisissez n'existe pas.");
    }
}
Rechercher()
// 8. Statistiques de l'élection : 
// const prompt = require("prompt-sync")();
// const Candidat = [{Cin: "bh001", Nom: "Alami", Prénom: "Yassine", Parti_politique: "Parti du Renouveau", Âge: 42, Electeurs:[ "bh000"]},{
// Cin: "bh002", Nom: "Benjelloun", Prénom: "Salma", Parti_politique: "Alliance Citoyenne", Âge: 36, Electeurs: ["kj123", "mn4521" , "rt789", "xp0012"]},{
// Cin: "bh003", Nom: "El Mansouri", Prénom: "Karim", Parti_politique: "Parti de l'Avenir", Âge: 51, Electeurs: ["fg0000","az456", "qw7834"]},{
// Cin: "bh004", Nom: "Idrissi", Prénom: "Lina", Parti_politique: "Mouvement Progressiste", Âge: 29, Electeurs: ["pl321", "yu6547"]},{
// Cin: "bh005", Nom: "Tazi", Prénom: "Amine", Parti_politique: "Parti du Renouveau", Âge: 47, Electeurs: ["dc987", "hk2345","we159", "lo8765","nm753", "bc1029"]},{
// Cin: "bh006", Nom: "Berrada", Prénom: "Nadia", Parti_politique: "Alliance Citoyenne", Âge: 39, Electeurs: ["er246", "ty5318","er246", "ty5318","qa214"]},{
// Cin: "bh007", Nom: "Chraibi", Prénom: "Mehdi", Parti_politique: "Parti de l'Avenir", Âge: 33, Electeurs: ["ws639", "ed7412","rf825", "tg3964","yh472", "uj8153","ik956"]},{
// Cin: "bh008", Nom: "Alaoui", Prénom: "Imane", Parti_politique: "Mouvement Progressiste", Âge: 45, Electeurs: ["ab214", "cd5831", "ef639", "gh7412", "ij825", "kl3964", "mn472", "op8153"]},{
// Cin: "bh009", Nom: "Bennani", Prénom: "Omar", Parti_politique: "Parti du Renouveau", Âge: 58, Electeurs: ["qr956", "st2478", "uv381", "wx6295", "yz714", "aa3582", "bb263", "cc9471", "dd548"]},{
// Cin: "bh010", Nom: "Skalli", Prénom: "Sara", Parti_politique: "Alliance Citoyenne", Âge: 31, Electeurs: ["hk183", "lm7294", "np456", "qr8127", "st365", "uv9402", "wx5717"]}]
function Statistiques() {
    let totalCandidats = Candidat.length;
    console.log("Total candidats : " + totalCandidats);
    let totalVotes = 0;
    for (let i = 0; i < Candidat.length; i++) {
        totalVotes = totalVotes + Candidat[i].Electeurs.length;
    }
    console.log("Total des votes exprimés : " + totalVotes);
    console.log("\nNombre de candidats par parti politique :");
    let partiesVisitees = [];
    for (let i = 0; i < Candidat.length; i++) {
        let partiActuel = Candidat[i].Parti_politique;
        let dejaCalcule = false;
        for (let k = 0; k < partiesVisitees.length; k++) {
            if (partiesVisitees[k] === partiActuel) {
                dejaCalcule = true;
                break;
            }
        }
        if (dejaCalcule === false) {
            let compteur = 0;
            for (let j = 0; j < Candidat.length; j++) {
                if (Candidat[j].Parti_politique === partiActuel) {
                    compteur++;
                }
            }
            console.log("- " + partiActuel + " : " + compteur);
            partiesVisitees.push(partiActuel);
        }
    }
    console.log("\n--- Top 3 des candidats ---");
    let copialCandidat = [];
    for (let i = 0; i < Candidat.length; i++) {
        copialCandidat.push(Candidat[i]);
    }
    for (let i = 0; i < copialCandidat.length; i++) {
        for (let j = i + 1; j < copialCandidat.length; j++) {
            if (copialCandidat[i].Electeurs.length < copialCandidat[j].Electeurs.length) {
                let temp = copialCandidat[i];
                copialCandidat[i] = copialCandidat[j];
                copialCandidat[j] = temp;
            }
        }
    }
    let limite = 3;
    if (copialCandidat.length < 3) {
        limite = copialCandidat.length;
    }
    for (let i = 0; i < limite; i++) {
        console.log((i + 1) + ". " + copialCandidat[i].Nom + " " + copialCandidat[i].Prenom + " - Votes : " + copialCandidat[i].Electeurs.length);
    }
}
Statistiques()

