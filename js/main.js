let notSelectedStudent = new Array();
notSelectedStudent = [
  "Dylan",
  "Alfonso",
  "Yamina",
  "Arthur",
  "Laurent",
  "Célèste",
  "Francis",
  "Marley",
  "Lucas",
  "Aleaddine",
  "Tommy",
  "Josélito",
];
let selectedStudent = new Array();
let randomIndex = new Number();



//transformer le tableau en chaine de caractères et le stocker en local
localStorage.setItem("apprenantNoSelected", notSelectedStudent.join(", "));

// Au chargement de la page affiche la liste des non selectionnés à partir du stackage local
notSelectedStudentLocal = localStorage.getItem("apprenantNoSelected").split(", ");

for (let i = 0; i < notSelectedStudentLocal.length; i++) {
  document.getElementById("noSelected").innerHTML +=
    notSelectedStudentLocal[i] + "<br>";
}
let count = notSelectedStudentLocal.length;

//au click sur le bouton
document.getElementById("randomBtn").addEventListener("click", function () {
  //tant qu'il ya des élements dans la liste locale des non séléctionnés
  
  if (count != 0) {
    //Generate a random index
    randomIndex = Math.floor(Math.random() * notSelectedStudentLocal.length);

    //ajouter l'element dans les selectionnés
    selectedStudent.push(notSelectedStudentLocal[randomIndex]);

    //affiche cet élement dans la colonne de droite
    document.getElementById("selected").innerHTML += notSelectedStudentLocal[randomIndex] + "<br>";

    //supprimer l'élément dans le tableau des non selectionné
    notSelectedStudentLocal.splice(randomIndex, 1);

    //enregistrer en local la nouvelle liste des non selectionnes
    localStorage.setItem("apprenantNoSelected", notSelectedStudentLocal.join(", "));


    // Affiche la nouvelle liste des non selectionnés à partir du stackage local

    notSelectedStudentLocal = localStorage.getItem("apprenantNoSelected").split(", ");
    //effacer le contenu de la colonne de gauche
    document.getElementById("noSelected").innerHTML = "";

    for (let i = 0; i < notSelectedStudentLocal.length; i++) {
      document.getElementById("noSelected").innerHTML +=
        notSelectedStudentLocal[i] + "<br>";
    }
    

    //transformer le tableau en chaine de caractères et le stocker localement
    localStorage.setItem("apprenantSelected", selectedStudent.join(", "));
  } else {
    alert("tout le monde sélectionné!");

    // console.log("apprenant selectionnés " + selectedStudent);
  }
  count -=1;
});
