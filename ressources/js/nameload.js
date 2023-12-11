var firstName = localStorage.getItem('firstName');
	var lastName = localStorage.getItem('lastName');
  
	// Afficher les informations sur la page
	if (firstName && lastName) {
	  var userName = document.getElementById('userName');
	  userName.textContent = "Bonjour, " + firstName + " " + lastName + " !";
	  var theName = document.getElementById('theName');
	  theName.textContent = firstName + " " + lastName;
	}