const prompt = require("prompt-sync")();
function Modifier(){
    console.log(`Choisez 1 pour Modifier le parti politique d'un candidat.\nChoisez 2 pour Modifier l'âge d'un candidat.`);
    const Choix = parseInt(prompt("Entrez votre choix :"))
    switch(Choix){
        case 1:
            let CIN_1 = prompt("Entrez votre CIN : ")
            for(let i=0;i<Candidat.length;i++){
                if(Candidat[i].CIN == CIN_1){
                    let Modification = prompt("Entrez le nouveau parti politique : ")
                    Candidat[i].Parti_Politique = Modification
                    break
                }else if (i+1==Candidat.length){
                    console.log ("Le candidat que vous choisez n'exist pas .")
                }
            }
            break
        case 2:
            let CIN_2 = prompt("Entrez votre CIN : ")
            let j=0
            while(j<Candidat.length){
                if(Candidat[j].CIN == CIN_2){
                    let Modification = parseInt(prompt("Entrez le nouveau âge : "))
                    Candidat[j].Age = Modification
                    break
                }else if (j+1==Candidat.length){
                    console.log("Le candidat que vous choisez n'exist pas .")
                }
                j++
            }
            break
        default :
            console.log("Choix incorrect")
            return Modifier()
    }
}