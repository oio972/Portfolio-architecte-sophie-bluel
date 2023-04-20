//les categories
//intercepter l'element
const categories = document.getElementById("categorie")
const categoriesList = document.createElement("div")
  categoriesList.classList.add('classbloccategories')
  categories.appendChild(categoriesList)
  const tous = document.createElement('p')
  tous.innerHTML = 'Tous'
  tous.classList.add('classobjets','filtre')
  tous.setAttribute('id', 'idtous')
  tous.setAttribute('data-category','Tous')
  categoriesList.appendChild(tous)

//fetch get recuperer asynchrone les categories
async function getCategories(){
  try{
    const response = await fetch('http://localhost:5678/api/categories')
    const categories = await response.json();
    return categories;
 }catch(err){
   console.error(err); 
 }
}

//function
getCategories().then(categories=>{
  categories.forEach(category => {
    const divcategorie = document.createElement("p")
    if(category.name === "Objets"){
      divcategorie.classList.add('classBouton','filtre')
      divcategorie.setAttribute('id','idobjets')
      divcategorie.setAttribute('data-category','Objets')
      divcategorie.textContent = category.name
      categoriesList.appendChild(divcategorie)
    }else if(category.name === "Appartements"){
      divcategorie.classList.add('classBouton','filtre')
      divcategorie.setAttribute('id','idappartements')
      divcategorie.setAttribute('data-category','Appartements')
      divcategorie.textContent = category.name
      categoriesList.appendChild(divcategorie)
    }else if(category.name === "Hotels & restaurants"){
      divcategorie.classList.add('classBouton','filtre')
      divcategorie.setAttribute('id','idhotel')
      divcategorie.setAttribute('data-category','Hotels & restaurants')
      divcategorie.textContent = category.name
      categoriesList.appendChild(divcategorie)
    }
  }) 
  });

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
      workItem.setAttribute('data-category', work.category)
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
//fetch get recuperer asynchrone pour les images 
async function getFiltreImages() {
  try {
    const response = await fetch('http://localhost:5678/api/works')
    const images = await response.json();
    return images;
  } catch (err) {
    console.error(err);
  }
}
 */
/*
//LES FILTRES
//intercepter l'element
const classBoutons = document.querySelectorAll('.classBouton');
// le conteneur pour les résultats
const container = document.getElementById('resultats'); 
//boucle
for (const allBouton of classBoutons) {
  allBouton.addEventListener('click', () => {
    // effacer les résultats précédents
    container.innerHTML = '';
    for (const parcourTableau of data) {
      if (parcourTableau.category.name === allBouton.textContent) {
        const divResultat = document.createElement('div');
        const nomProduit = document.createElement('h2');
        const description = document.createElement('p');
        nomProduit.textContent = parcourTableau.category.name;
        description.textContent = parcourTableau.description;
        divResultat.appendChild(nomProduit);
        divResultat.appendChild(description);
        container.appendChild(divResultat);
      }
    }
  })
}
*/

const tableaufiltres = [
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

/*
//CATEGORIES
const categories = document.querySelector('#categorie');
categories.classList.add('classbloccategories')

const butonName = [
  {
    name: "Tous"
  },
  {
    name: "Objets"
  },
  {
    name: "Appartements"
  },
  {
    name: "Hotels & restaurants"
  }
]

const classBoutons = document.querySelectorAll('.classBouton');
for (const allBouton of classBoutons) {
  allBouton.addEventListener('click', () => {
    for (const parcourTableau of data) {
      if (parcourTableau.category.name === allBouton.textContent) {
        console.log(parcourTableau);
      }
    }
  })
}

for (const i of butonName) {
  const bouton = document.createElement('div');
  const touss = document.createElement('div');
  bouton.className = "classBouton";
  bouton.className = "classBouton";
  bouton.textContent = i.name;
  categories.appendChild(bouton);
}

//au click sur tous afficher les images correspondantes
const clicktous = document.getElementById('idtous');
clicktous.addEventListener('click', () => {
    const allimages = document.querySelectorAll('img');
    allimages.forEach(img => {
      if (img.dataset.category === 'Objets') {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  });
*/
 /*
// Ajoutez un événement de clic sur l'élément "Objets"
const clickobjets = document.getElementById('idobjets')
clickobjets.addEventListener('click', ()=> {
  // Récupérez toutes les images
  const images = document.querySelectorAll('.gallery > div')
  // Itérez sur chaque image
  images.forEach((image) => {
    // Vérifiez si l'image correspond à la catégorie "Objets"
    if (image.getAttribute('data-category') === 'Objets') {
      // Si oui, affichez l'image
      image.style.display = 'block'
    } else {
      // Sinon, masquez l'image
      image.style.display = 'none'
    }
  })
})
*/

/*
// Sélectionner les images avec la catégorie "Objets"
const objets = tableaufiltres.filter(item => item.category.name === "Objets");

// Sélectionner l'élément HTML où vous souhaitez afficher les images
const container = document.querySelector("#image-container");

// Afficher chaque image dans le conteneur HTML
objets.forEach(item => {
  const image = document.createElement("img");
  image.src = item.imageUrl;
  container.appendChild(image);
});

  let filtres = document.querySelectorAll(".filtre");
  console.log(filtres);
  filtres.forEach(item=>{
    item.addEventListener('click', ()=>{
      alert(item.id);
    })
  })
*/

























