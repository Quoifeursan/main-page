// onload.js
function verifierCompteLocal() {
  // Récupérer les informations stockées localement
  var firstName = localStorage.getItem('firstName');
  var lastName = localStorage.getItem('lastName');
  var accountExists = localStorage.getItem('accountExists');

  // Vérifier si les informations existent
  if (firstName && lastName && accountExists === 'true') {
    // Les informations existent, vous pouvez ouvrir la page principale
    // Ajustez le chemin de redirection selon votre structure
    window.location.href = 'index.html';
  } else {
    // Les informations ne sont pas disponibles ou c'est la première visite, afficher la popup d'inscription
    popupInscription();
  }
}

// Appel de la fonction au chargement de la page
window.onload = verifierCompteLocal;

// Inscription.js
document.getElementById('submit-connexion').addEventListener('click', function() {
  // Récupérer les valeurs du formulaire
  var firstName = document.getElementById('prénom').value;
  var lastName = document.getElementById('name').value;

  // Vérifier si les champs ne sont pas vides
  if (firstName.trim() !== '' && lastName.trim() !== '') {
    // Stocker localement les informations
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);

    // Indiquer qu'un compte a été créé sur cet appareil
    localStorage.setItem('accountExists', 'true');

    // Rediriger vers la même page (index.html) après l'inscription
    verifierCompteLocal(); // Appeler la vérification après l'inscription
  } else {
    // Gérer le cas où les champs ne sont pas remplis
    alert('Veuillez remplir tous les champs du formulaire.');
  }
});
