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
