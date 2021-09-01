let student = new Array();

student = document.querySelectorAll('li');

// localStorage.setItem("name" , "Yamina Jouille");

document.getElementById("randomBtn").addEventListener("click" , function(){
    for(i=0 ; i<student.length ; i++){
        console.log(student[i]);
    }
   
});