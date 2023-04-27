//fetch get recuperer asynchrone le login
async function getLogin() {
    try {
        const responseLogin = await fetch('http://localhost:5678/api/users/login')
        const logins = await responseLogin.json()
        return logins
    } catch (err) {
        console.error(err)
    }
}
//recuperer les elements
const logins = document.getElementById('login')
const emails = document.getElementById('email')
const passwords = document.getElementById('password')
const errorMessage = document.getElementById('error-message')
const passwordForget = document.getElementById('password-forget')
//recuperer le formulaire
const theForm = document.querySelector('form')
//au clique verifier si l'email et le mot de passe est correct
theForm.addEventListener('click', () => {
// vérifier si les informations d'utilisateur et du mot de passe sont correctes
  const theEmail = 'sophie.bluel@test.tld'
  const thePassword = 'S0phie'
  //condition login si c'est OK rediriger vers la page d'accueil index.html
  if (theEmail === 'sophie.bluel@test.tld' && thePassword === 'S0phie') {
   //sinon 
  } else {
  // afficher un message d'erreur
  errorMessage.textContent = 'Email ou mot de passe incorrect.';
  }
});