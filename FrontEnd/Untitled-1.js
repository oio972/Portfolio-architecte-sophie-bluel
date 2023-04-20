const categories = document.querySelector('#categorie');

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

for (const i of butonName) {
  const bouton = document.createElement('button');
  bouton.className = "classBouton";
  bouton.textContent = i.name;
  categories.appendChild(bouton)
}

//fetch get recuperer asynchrone
async function getCategories() {
  try {
    const response = await fetch('http://localhost:5678/api/categories')
    const categories = await response.json();
    return categories;
  } catch (err) {
    console.error(err);
  }
}
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
      const descriptionElement = document.createElement("p")
      descriptionElement.textContent = work.name
      workItem.appendChild(descriptionElement)
      divworks.appendChild(workItem)
    })
    const classBoutons = document.querySelectorAll('.classBouton');
    for (const allBouton of classBoutons) {
      allBouton.addEventListener('click', () => {
        for (const parcourTableau of data) {
            if (parcourTableau.category.name === allBouton.textContent) {
              console.log(parcourTableau.category.name);
            }
        }
      })
    }

  })
  .catch(error => {
    console.error(error)
  })