const prompt = require("prompt-sync")();
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