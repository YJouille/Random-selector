let notSelectedStudents = new Array();
notSelectedStudents = ["Dylan", "Alfonso", "Yamina", "Arthur", "Laurent", "Célèste", "Francis", "Marley", "Lucas", "Aleaddine", "Tommy", "Josélito"];
let notSelectedStudentsLocal = new Array();
let selectedStudentsLocal = new Array();
let randomIndex = new Number();
let nbvisites;


/*******Définition des fonction*******/
// Cette fonction indique si c'est un premier chargement ou une actualisation
function visitCounter() {
  if (typeof localStorage != "undefined") {
    // Récupération de la valeur dans web storage
    nbvisites = localStorage.getItem("visites");
    // Vérification de la présence du compteur
    if (nbvisites != null) {
      // Si oui, on convertit en nombre entier la chaîne de texte qui fut stockée
      nbvisites = parseInt(nbvisites);
    } else {
      nbvisites = 1;
    }
    // Incrémentation
    nbvisites++;
    // Stockage à nouveau en attendant la prochaine visite...
    localStorage.setItem("visites", nbvisites);
    // Affichage dans la page
    //document.getElementById('visites').innerHTML = nbvisites;
  } else {
    alert("localStorage n'est pas supporté");
  }
  return nbvisites;
}

// Cette fonction affiche le resultat en html
function display(idDiv , arrayStudents){
  document.getElementById(idDiv).innerHTML = '';
    for (let i = 0; i < arrayStudents.length; i++) {
      document.getElementById(idDiv).innerHTML +=
      arrayStudents[i] + "<br>";
    }
}

/*******Appel des fonctions*******/
nbvisites = visitCounter();

//cahrgement
window.addEventListener("load", function () {

  console.log("nombre visites " + nbvisites);

  if (nbvisites == 2) {
    //au premier chargement : la liste de gauche complète et celle de droite vide
    //liste de gauche
    display("noSelected" , notSelectedStudents );

    //ecrire cette liste complète en local en transformant le tableau en chaine de caractères et le stocker en local
     localStorage.setItem("apprenantNoSelected", notSelectedStudents.join(","));
     notSelectedStudentsLocal = localStorage.getItem("apprenantNoSelected").split(",");
  } else {
    //dans le cas d'une actualisation
   //liste de gauche : récuperer et afficher le contenu de la liste locale des non selected
   notSelectedStudentsLocal = localStorage.getItem("apprenantNoSelected").split(",");

   display("noSelected" , notSelectedStudentsLocal );

   //liste de droite : récuperer et afficher le contenu de la liste locale des selected
   console.log('selectedStudentsLocal'+selectedStudentsLocal);

   if (localStorage.getItem('apprenantSelected')){
    selectedStudentsLocal = localStorage.getItem("apprenantSelected").split(",");
   }



   display("selected" , selectedStudentsLocal );
  }
});



//au click sur le bouton
document.getElementById("randomBtn").addEventListener("click", function () {
  let count = notSelectedStudentsLocal.length;
  console.log('count '+count);
  
  if (count > 0) {
    
  //Generate a random index
  randomIndex = Math.floor(Math.random() * count);

   //ajouter l'element dans les selectionnés
   selectedStudentsLocal.push(notSelectedStudentsLocal[randomIndex]);

    //colonne de droite
    //affiche cet élement dans la colonne de droite
    document.getElementById("selected").innerHTML += notSelectedStudentsLocal[randomIndex] + "<br>";
   

   //supprimer l'élément dans le tableau des non selectionné local
   notSelectedStudentsLocal.splice(randomIndex, 1);

    //enregistrer en local la nouvelle liste des non selectionnes
    localStorage.setItem("apprenantNoSelected", notSelectedStudentsLocal.join(","));

    //transformer le tableau en chaine de caractères et le stocker localement
    console.log ('selectedStudentsLocal '+selectedStudentsLocal);

    localStorage.setItem("apprenantSelected", selectedStudentsLocal.join(","));

    display("noSelected" , notSelectedStudentsLocal );
   
    count -= 1;
  } else {
    selectedStudentsLocal =[];
    alert("tout le monde sélectionné!");
    display("noSelected" , notSelectedStudents ); //liste initiale complète à gauche
    localStorage.setItem("apprenantNoSelected", notSelectedStudents.join(","));

    document.getElementById("selected").innerHTML = "";

    localStorage.removeItem("apprenantSelected");
    //vider le tableau des apprenants selected

    notSelectedStudentsLocal = localStorage.getItem("apprenantNoSelected").split(",");
}
});