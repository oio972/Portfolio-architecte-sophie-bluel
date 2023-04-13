
//les categories
//intercepter l'element
const categories = document.getElementById("categorie")
const categoriesList = document.createElement("div")
    categoriesList.classList.add('classbloccategories')
    categories.appendChild(categoriesList)
    const tous = document.createElement('p')
    tous.innerHTML = 'Tous'
    tous.classList.add('classobjets')
    tous.setAttribute('id', 'idtous')
    categoriesList.appendChild(tous)
//fetch get recuperer
fetch('http://localhost:5678/api/categories')
//on veut recuperer une response en json
  .then(Response => Response.json())
  .then(data => {
    //boucle
    data.forEach(category => {
      const divcategorie = document.createElement("p")
      if(category.name === "Objets"){
        divcategorie.classList.add('classobjets')
        divcategorie.setAttribute('id','idobjets')
        divcategorie.textContent = category.name
        divcategorie.dataset = 'Objets'
        categoriesList.appendChild(divcategorie)
      }else if(category.name === "Appartements"){
        divcategorie.classList.add('classappartements')
        divcategorie.setAttribute('id' , 'idappartements')
        divcategorie.dataset = 'Appartements'
        divcategorie.textContent = category.name
        categoriesList.appendChild(divcategorie)
      }else if(category.name === "Hotels & restaurants"){
        divcategorie.classList.add('classhotel')
        divcategorie.setAttribute('id' , 'idhotels')
        divcategorie.textContent = category.name
        divcategorie.dataset = 'Hotels & restaurants'
        categoriesList.appendChild(divcategorie)
      }
  })
  })
  .catch(error => {
    console.error(error)
  })


//les images
//intercepter l'element
const works = document.getElementById("work")
//fetch get recuperer
fetch('http://localhost:5678/api/works')
//on veut recuperer une response en json
  .then(response => response.json())
  .then(data => {
    const divworks = document.createElement("div")
    divworks.classList.add("gallery")
    works.appendChild(divworks)
    data.forEach(work => {
      const workItem = document.createElement("div")
      const imageElement = document.createElement("img")
      imageElement.src = work.imageUrl
      workItem.appendChild(imageElement)
      const nameElement = document.createElement("p")
      nameElement.textContent = work.title
      workItem.appendChild(nameElement)
      const descriptionElement  = document.createElement("p")
      descriptionElement .textContent = work.name
      workItem.appendChild(descriptionElement)
      divworks.appendChild(workItem)
    })
  })
  .catch(error => {
    console.error(error)
  })
/*
  const filtres = [
    {
      "id": 1,
      "title": "Abajour Tahina",
      "imageUrl": "http://localhost:5678/images/abajour-tahina1651286843956.png",
      "categoryId": 1,
      "userId": 1,
      "category": {
        "id": 1,
        "name": "Objets"
      }
    },
    {
      "id": 2,
      "title": "Appartement Paris V",
      "imageUrl": "http://localhost:5678/images/appartement-paris-v1651287270508.png",
      "categoryId": 2,
      "userId": 1,
      "category": {
        "id": 2,
        "name": "Appartements"
      }
    },
    {
      "id": 3,
      "title": "Restaurant Sushisen - Londres",
      "imageUrl": "http://localhost:5678/images/restaurant-sushisen-londres1651287319271.png",
      "categoryId": 3,
      "userId": 1,
      "category": {
        "id": 3,
        "name": "Hotels & restaurants"
      }
    },
    {
      "id": 4,
      "title": "Villa “La Balisiere” - Port Louis",
      "imageUrl": "http://localhost:5678/images/la-balisiere1651287350102.png",
      "categoryId": 2,
      "userId": 1,
      "category": {
        "id": 2,
        "name": "Appartements"
      }
    },
    {
      "id": 5,
      "title": "Structures Thermopolis",
      "imageUrl": "http://localhost:5678/images/structures-thermopolis1651287380258.png",
      "categoryId": 1,
      "userId": 1,
      "category": {
        "id": 1,
        "name": "Objets"
      }
    },
    {
      "id": 6,
      "title": "Appartement Paris X",
      "imageUrl": "http://localhost:5678/images/appartement-paris-x1651287435459.png",
      "categoryId": 2,
      "userId": 1,
      "category": {
        "id": 2,
        "name": "Appartements"
      }
    },
    {
      "id": 7,
      "title": "Pavillon “Le coteau” - Cassis",
      "imageUrl": "http://localhost:5678/images/le-coteau-cassis1651287469876.png",
      "categoryId": 2,
      "userId": 1,
      "category": {
        "id": 2,
        "name": "Appartements"
      }
    },
    {
      "id": 8,
      "title": "Villa Ferneze - Isola d’Elba",
      "imageUrl": "http://localhost:5678/images/villa-ferneze1651287511604.png",
      "categoryId": 2,
      "userId": 1,
      "category": {
        "id": 2,
        "name": "Appartements"
      }
    },
    {
      "id": 9,
      "title": "Appartement Paris XVIII",
      "imageUrl": "http://localhost:5678/images/appartement-paris-xviii1651287541053.png",
      "categoryId": 2,
      "userId": 1,
      "category": {
        "id": 2,
        "name": "Appartements"
      }
    },
    {
      "id": 10,
      "title": "Bar “Lullaby” - Paris",
      "imageUrl": "http://localhost:5678/images/bar-lullaby-paris1651287567130.png",
      "categoryId": 3,
      "userId": 1,
      "category": {
        "id": 3,
        "name": "Hotels & restaurants"
      }
    },
    {
      "id": 11,
      "title": "Hotel First Arte - New Delhi",
      "imageUrl": "http://localhost:5678/images/hotel-first-arte-new-delhi1651287605585.png",
      "categoryId": 3,
      "userId": 1,
      "category": {
        "id": 3,
        "name": "Hotels & restaurants"
      }
    }
  ]
  */
  /*
//le fitre
const idobjet = document.getElementById('idobjets')
const afficheobjet = document.createElement('div')
.setAttribute('id', 'afficheobjets')
.document.getElementById('afficheobjets')
afficheobjet.addEventListener('click', ()=>{

})
//fetch get recuperer
fetch('http://localhost:5678/api/works')
//on veut recuperer une response en json
  .then(response => response.json())
  .then(data => {
    const dividobjet = document.createElement("div")
    idobjet.appendChild(dividobjet)
    data.forEach(work => {
      const workItem = document.createElement("div")
      const imagefiltre = document.createElement("img")
      imageElement.src = work.imageUrl
      workItem.appendChild(imagefiltre)
      const nameElement = document.createElement("p")
      nameElement.textContent = work.title
      workItem.appendChild(nameElement)
      const descriptionElement  = document.createElement("p")
      descriptionElement .textContent = work.name
      workItem.appendChild(descriptionElement)
      divworks.appendChild(workItem)
    })
  })
  .catch(error => {
    console.error(error)
  })
*/
/*
const idobjet = document.getElementById('idobjets')
idobjet.addEventListener('click', () => {
  fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(data => {
      // Récupérer l'élément HTML dans lequel afficher les données
      const afiicheobjet = document.getElementById('containerobjet')
      // Créer un élément HTML pour chaque projet et les ajouter au container
      data.forEach(project => {
        const divobjet = document.createElement('div')
        divobjet.innerHTML = 
        `<h3>${project.title}</h3>
        <p>${project.description}</p>`
        afiicheobjet.appendChild(divobjet)
      })
    })
    .catch(error => {
      console.error(error)
    })
})
*/