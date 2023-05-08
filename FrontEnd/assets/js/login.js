<<<<<<< HEAD

//recuperer le formulaire et le message d'erreur
const loginForm = document.getElementById('loginForm');
const error = document.getElementById('error-message');
//évenement au remplissage du formulaire (async)
=======
const loginForm = document.getElementById('loginForm');
const error = document.getElementById('error-message');

>>>>>>> ddf0959071f05c6477b0c451e3122903cf0fa193
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  // Récupérer les informations de connexion du formulaire
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Envoyer les informations de connexion à l'API pour authentification
  const response = await fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
//Condition
  if (response.status === 200) {
    // Récupérer le jeton d'authentification depuis la réponse de l'API
<<<<<<< HEAD
    const data = await response.json();
    console.log(data) 

    // Enregistrer le jeton d'authentification dans le stockage local
    sessionStorage.setItem('token', data.token);
    sessionStorage.setItem('userId', data.userId);
=======
    const token = await response.json();
    console.log(token) 

    // Enregistrer le jeton d'authentification dans le stockage local
    sessionStorage.setItem('token', token.token);
    sessionStorage.setItem('userId', token.userId);
>>>>>>> ddf0959071f05c6477b0c451e3122903cf0fa193

    // redirige l'utilisateur vers la page d'accueil  
    window.location.href = 'index.html';
//Sinon
  } else {
    // Afficher un message d'erreur si les informations de connexion sont fausses
    error.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
  }
});
<<<<<<< HEAD

=======
>>>>>>> ddf0959071f05c6477b0c451e3122903cf0fa193
