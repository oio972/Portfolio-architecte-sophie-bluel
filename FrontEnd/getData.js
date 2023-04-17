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

//fetch get recuperer
async function getCategories(){
  try{
    const response = await fetch('http://localhost:5678/api/categories')
    const categories = await response.json();
    return categories;
 }catch(err){
   console.error(err); 
 }
}

getCategories().then(categories=>{
  categories.forEach(category => {
    const divcategorie = document.createElement("p")
    if(category.name === "Objets"){
      divcategorie.classList.add('classobjets','filtre')
      divcategorie.setAttribute('id','idobjets')
      divcategorie.setAttribute('data-category','Objets')
      divcategorie.textContent = category.name
      categoriesList.appendChild(divcategorie)
    }else if(category.name === "Appartements"){
      divcategorie.classList.add('classappartements','filtre')
      divcategorie.setAttribute('id','idappartements')
      divcategorie.setAttribute('data-category','Appartements')
      divcategorie.textContent = category.name
      categoriesList.appendChild(divcategorie)
    }else if(category.name === "Hotels & restaurants"){
      divcategorie.classList.add('classhotel','filtre')
      divcategorie.setAttribute('id','idhotel')
      divcategorie.setAttribute('data-category','Hotels & restaurants')
      divcategorie.textContent = category.name
      categoriesList.appendChild(divcategorie)
    }
  }) 
  });
  //intercepter les click pour afficher les images correspondantes
  categoriesList.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-category')) {
      const category = event.target.getAttribute('data-category');
      const works = document.querySelectorAll('.gallery div');
      works.forEach((work) => {
        if (work.getAttribute('data-category') !== category && category !== 'Tous') {
          work.style.display = 'none';
        } else {
          work.style.display = 'block';
        }
      });
    }
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
  let filtres = document.querySelectorAll(".filtre");
  console.log(filtres);
  filtres.forEach(item=>{
    item.addEventListener('click', ()=>{
      alert(item.id);
    })
  })
});
*/

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

   /*
//intercepter les elements au click
  const buttons = document.querySelectorAll('.filtre')
  buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
  const category = event.target.dataset.category
  })
})
 // appel à une fonction pour filtrer les images selon la catégorie
function filterImagesByCategory(category) {
  const images = document.querySelectorAll('img');
  images.forEach((image) => {
    if (image.dataset.category === category || category === 'Tous') {
      image.style.display = 'block'
    } else {
      image.style.display = 'none'
    }
  })
}
*/
 /*
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
//au click sur objets afficher les images correspondantes
  const clickobjets = document.getElementById('idobjets');
  clickobjets.addEventListener('click', () => {
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