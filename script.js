
function checkPassword() {
  var password = prompt("Veuillez entrer le mot de passe :");
  
  if (password === "azer") {
    // Mot de passe correct, rediriger vers la page souhaitée
    window.location.href = "/stage";
  } else {
    // Mot de passe incorrect, afficher un message d'erreur
    alert("Mot de passe incorrect. Veuillez réessayer.");
  }
}
