<?php
if(isset($_POST['contenu'])){
  $contenu = $_POST['contenu'];
  
  // Nom du fichier de destination
  $nomFichier = 'enregistrement.txt';

  // Ouvrir le fichier en mode écriture (ajout en fin de fichier)
  $fichier = fopen($nomFichier, 'a');
  
  // Écrire le contenu dans le fichier
  fwrite($fichier, $contenu);
  
  // Fermer le fichier
  fclose($fichier);
  
  echo "Enregistrement effectué avec succès !";
}
?>
