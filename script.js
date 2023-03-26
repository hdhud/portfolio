const semestre = {
    0:{
        0:"Implémentation d'un besoin client",
        1:"Comparaison algorithmique d'algorithme",
        2:"Installation et configuration de poste informatique",
        3:"Gestion d'une base de données",
        4:"Receuil des besoins",
        5:"Découverte de l'environnement économique et écologique"
    },
    1:{
        0:"Implémentation d'un besoin client",
        1:"Implémentation d'un besoin client",
        2:"Implémentation d'un besoin client",
        3:"Installation de service Réseau",
        4:"PowerBI et exploitation de Données",
        5:"Organisatoin d'un travail d'équipe"
    },
    2:{
        0:"Développement web",
        1:"Programmation web",
        2:"Programmation web",
        3:"Programmation web",
        4:"Programmation web",
        5:"Programmation web"
    },
    3:{
        0:"Développement web",
        1:"Programmation web",
        2:"Programmation web",
        3:"Programmation web",
        4:"Programmation web",
        5:"Programmation web"
    },
    4:{
        0:"Développement web",
        1:"Programmation web",
        2:"Programmation web",
        3:"Programmation web",
        4:"Programmation web",
        5:"Programmation web"
    },
    5:{
        0:"Développement web",
        1:"Programmation web",
        2:"Programmation web",
        3:"Programmation web",
        4:"Programmation web",
        5:"Programmation web"
    }
}

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        console.log(semestre[i][j]);
    }
}
//recupere l'élément html avec l'id nbsemestre
const nbSemestre = document.getElementById("nbsemestre");
console.log(nbSemestre);


