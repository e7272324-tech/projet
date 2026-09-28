const prompt = require("prompt-sync")();
const candidat = [{Cin: "bh001", Nom: "Alami", Prénom: "Yassine", Parti_politique: "Parti du Renouveau", Âge: 42, Electeurs:[ "bh000"]},{
Cin: "bh002", Nom: "Benjelloun", Prénom: "Salma", Parti_politique: "Alliance Citoyenne", Âge: 36, Electeurs: ["kj123", "mn4521" , "rt789", "xp0012"]},{
Cin: "bh003", Nom: "El Mansouri", Prénom: "Karim", Parti_politique: "Parti de l'Avenir", Âge: 51, Electeurs: ["fg0000","az456", "qw7834"]},{
Cin: "bh004", Nom: "Idrissi", Prénom: "Lina", Parti_politique: "Mouvement Progressiste", Âge: 29, Electeurs: ["pl321", "yu6547"]},{
Cin: "bh005", Nom: "Tazi", Prénom: "Amine", Parti_politique: "Parti du Renouveau", Âge: 47, Electeurs: ["dc987", "hk2345","we159", "lo8765","nm753", "bc1029"]},{
Cin: "bh006", Nom: "Berrada", Prénom: "Nadia", Parti_politique: "Alliance Citoyenne", Âge: 39, Electeurs: ["er246", "ty5318","er246", "ty5318","qa214"]},{
Cin: "bh007", Nom: "Chraibi", Prénom: "Mehdi", Parti_politique: "Parti de l'Avenir", Âge: 33, Electeurs: ["ws639", "ed7412","rf825", "tg3964","yh472", "uj8153","ik956"]},{
Cin: "bh008", Nom: "Alaoui", Prénom: "Imane", Parti_politique: "Mouvement Progressiste", Âge: 45, Electeurs: ["ab214", "cd5831", "ef639", "gh7412", "ij825", "kl3964", "mn472", "op8153"]},{
Cin: "bh009", Nom: "Bennani", Prénom: "Omar", Parti_politique: "Parti du Renouveau", Âge: 58, Electeurs: ["qr956", "st2478", "uv381", "wx6295", "yz714", "aa3582", "bb263", "cc9471", "dd548"]},{
Cin: "bh010", Nom: "Skalli", Prénom: "Sara", Parti_politique: "Alliance Citoyenne", Âge: 31, Electeurs: ["hk183", "lm7294", "np456", "qr8127", "st365", "uv9402", "wx5717"]}]
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