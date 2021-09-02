let notSelectedStudent = new Array();
notSelectedStudent = ["Dylan","Alphonso","Yamina","Arthur","Laurent","Célèste"];
let selectedStudent = new Array();

let randomIndex = new Number;


//transformer le tableau en chaine de caractères et le stocker en local
localStorage.setItem("apprenantNoSelected",notSelectedStudent.join(", "));


// Affiche la liste des non selectionnés à partir du stackage local
notSelectedStudentLocal = localStorage.getItem("apprenantNoSelected").split(", ");

for (let i = 0; i < notSelectedStudentLocal.length; i++) {
    document.getElementById("noSelected").innerHTML += notSelectedStudentLocal[i]+'<br>';   
}


document.getElementById("randomBtn").addEventListener("click" , function(){  
   

     //tant qu'il ya des élements dans les non selectionnés
    if(notSelectedStudentLocal.length !=0){
        //Generate a random index

    randomIndex = Math.floor(Math.random() * notSelectedStudentLocal.length);
    //affiche le random index
    console.log(randomIndex);
 
    //affiche l'élément selectionné
    console.log(notSelectedStudentLocal[randomIndex]);
  
    //ajouter l'element dans les selectionnés
    selectedStudent.push(notSelectedStudentLocal[randomIndex]);

    //affiche cet élement
    document.getElementById("selected").innerHTML += notSelectedStudentLocal[randomIndex]+'<br>';

    //supprimer l'élément dans le tableau des non selectionné
    notSelectedStudentLocal.splice(randomIndex, 1);

    document.getElementById("noSelected").innerHTML = notSelectedStudentLocal+'<br>';

    //supprimer l'élément du stockage local

    //localStorage.setItem("apprenantNoSelected",notSelectedStudentLocal.join(", "));

    console.log(notSelectedStudentLocal)
    //transformer le tableau en chaine de caractères et le stocker localement
    localStorage.setItem("apprenantSelected",selectedStudent.join(", "));

    }else{
        console.log('tout le monde selectionné');
        console.log('apprenant selectionnés '+selectedStudent);   
    } 

});
