const semestre = {
  0: {
    0: "Implémentation d'un besoin client",
    1: "Comparaison algorithmique d'algorithme",
    2: "Installation et configuration de poste informatique",
    3: "Gestion d'une base de données",
    4: "Receuil des besoins",
    5: "Découverte de l'environnement économique et écologique",
  },
  1: {
    0: "Implémentation d'un besoin client",
    1: "Implémentation d'un besoin client",
    2: "Implémentation d'un besoin client",
    3: "Installation de service Réseau",
    4: "PowerBI et exploitation de Données",
    5: "Organisatoin d'un travail d'équipe",
  },
  2: {
    0: "Développement web",
    1: "Programmation web",
    2: "Programmation web",
    3: "Programmation web",
    4: "Programmation web",
    5: "Programmation web",
  },
  3: {
    0: "Développement web",
    1: "Programmation web",
    2: "Programmation web",
    3: "Programmation web",
    4: "Programmation web",
    5: "Programmation web",
  },
  4: {
    0: "Développement web",
    1: "Programmation web",
    2: "Programmation web",
    3: "Programmation web",
    4: "Programmation web",
    5: "Programmation web",
  },
  5: {
    0: "Développement web",
    1: "Programmation web",
    2: "Programmation web",
    3: "Programmation web",
    4: "Programmation web",
    5: "Programmation web",
  },
};

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    console.log(semestre[i][j]);
  }
}
//recupere l'élément html avec l'id nbsemestre
const nbSemestre = document.getElementById("nbsemestre");
const fleched = document.getElementById("fleched");
const flecheg = document.getElementById("flecheg");
var desc1 = document.getElementById("desc1");
var desc2 = document.getElementById("desc2");
var desc3 = document.getElementById("desc3");
var desc4 = document.getElementById("desc4");
var desc5 = document.getElementById("desc5");
var desc6 = document.getElementById("desc6");
var semestreActuel = 1;
desc1.innerHTML = semestre[semestreActuel - 1][0];
desc2.innerHTML = semestre[semestreActuel - 1][1];
desc3.innerHTML = semestre[semestreActuel - 1][2];
desc4.innerHTML = semestre[semestreActuel - 1][3];
desc5.innerHTML = semestre[semestreActuel - 1][4];
desc6.innerHTML = semestre[semestreActuel - 1][5];

fleched.onclick = () => {
  if (semestreActuel > 1) {
    semestreActuel--;
    nbSemestre.innerHTML = "Semestre : " + semestreActuel;
    desc1.innerHTML = semestre[semestreActuel - 1][0];
    desc2.innerHTML = semestre[semestreActuel - 1][1];
    desc3.innerHTML = semestre[semestreActuel - 1][2];
    desc4.innerHTML = semestre[semestreActuel - 1][3];
    desc5.innerHTML = semestre[semestreActuel - 1][4];
    desc6.innerHTML = semestre[semestreActuel - 1][5];
  }
};
flecheg.onclick = () => {
  if (semestreActuel < 6) {
    semestreActuel++;
    nbSemestre.innerHTML = "Semestre : " + semestreActuel;
    desc1.innerHTML = semestre[semestreActuel - 1][0];
    desc2.innerHTML = semestre[semestreActuel - 1][1];
    desc3.innerHTML = semestre[semestreActuel - 1][2];
    desc4.innerHTML = semestre[semestreActuel - 1][3];
    desc5.innerHTML = semestre[semestreActuel - 1][4];
    desc6.innerHTML = semestre[semestreActuel - 1][5];
  }
};
var tapping = document.getElementById("tapping");

const listtapping = [
  "Développeur web",
  "Développeur Java",
  "Développeur Android",
  "Designer",
];
var i = 0;
var j = 0;
function typing() {
  if (i < listtapping.length) {
    tapping.innerHTML = listtapping[i].slice(0, j) + "_";
    j++;
    if (j > listtapping[i].length) {
      tapping.innerHTML = listtapping[i];
      i++;
      j = 0;
      setTimeout(typing, 1000);
    } else {
      setTimeout(typing, 200);
    }
  } else {
    i = 0;
    typing();
  }
}
typing();
