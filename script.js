console.log(innerHeight+"px")
document.querySelector("html").style.height = innerHeight+"px";
document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour afficher/cacher la boîte de texte en fonction de la case "Autre"
  function toggleAutreClasse() {
    var autreClasseCheckbox = document.getElementById("autreClasseCheckbox");
    var autreClasseText = document.getElementById("autreClasseText");

    // Afficher la boîte de texte si la case "Autre" est cochée, sinon la cacher
    autreClasseText.style.display = autreClasseCheckbox.checked ? "block" : "none";
  }

  // Ajouter un écouteur d'événement à la case "Autre"
  document.getElementById("autreClasseCheckbox").addEventListener("change", toggleAutreClasse);
});
error = false
function submitForm(){
  input = document.getElementsByName("remarks")[1].value
  regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  if((input.match(regex) == null && (error == false))){
    let errorMsg = document.createElement('p')
    errorMsg.textContent = 'Adresse email incorecte.'
    document.querySelectorAll('section')[10].append(errorMsg)
    error = true
  }
  if((input.match(regex) != null) && (error == true)){
    document.querySelectorAll('section')[10].removeChild(document.querySelectorAll('section')[10].lastChild)
    error = false
  }
}