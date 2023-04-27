//fetch get recuperer asynchrone les categories
async function getCategories() {
  try {
    const response = await fetch("http://localhost:5678/api/categories");
    const categories = await response.json();
    return categories;
  } catch (err) {
    console.error(err);
  }
}
//les categories
//intercepter l'element
const categories = document.getElementById("categorie");
const categoriesList = document.createElement("div");
categoriesList.classList.add("classbloccategories");
categories.appendChild(categoriesList);
//création du filtre tous
const tous = document.createElement("p");
tous.innerHTML = "Tous";
tous.classList.add("filtre");
tous.setAttribute("id", "0");
tous.setAttribute("data-category", "tous");
categoriesList.appendChild(tous);

//recuperer et filtrer les categories
getCategories().then((categories) => {
  categories.forEach((category) => {
    const divcategorie = document.createElement("p");
    if (category.name === "Objets") {
      divcategorie.classList.add("filtre");
      divcategorie.setAttribute("id", "1");
      divcategorie.setAttribute("data-category", "Objets");
      divcategorie.textContent = category.name;
      categoriesList.appendChild(divcategorie);
    } else if (category.name === "Appartements") {
      divcategorie.classList.add("filtre");
      divcategorie.setAttribute("id", "2");
      divcategorie.setAttribute("data-category", "Appartements");
      divcategorie.textContent = category.name;
      categoriesList.appendChild(divcategorie);
    } else if (category.name === "Hotels & restaurants") {
      divcategorie.classList.add("filtre");
      divcategorie.setAttribute("id", "3");
      divcategorie.setAttribute("data-category", "Hotels & restaurants");
      divcategorie.textContent = category.name;
      categoriesList.appendChild(divcategorie);
    }
  });
  //appliquer le filtre au click
  const categoriesFilter = document.querySelectorAll(".filtre");
  categoriesFilter.forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item);
      const worksList = document.querySelectorAll(".work");
      worksList.forEach((work) => {
        if (item.id === "0") {
          work.style = "display: block";
        } else {
          if (work.getAttribute("data-category") === item.id) {
            work.style = "display: block";
          } else {
            work.style = "display: none";
          }
        }
      });
    });
  });
});

//les images
//intercepter l'element
const worksss = document.getElementById("workss");
//fetch get recuperer
fetch("http://localhost:5678/api/works")
  //on veut recuperer une response en json
  .then((response) => response.json())
  .then((data) => {
    const divworks = document.createElement("div");
    divworks.classList.add("gallery");
    worksss.appendChild(divworks);
    data.forEach((work) => {
      const workItem = document.createElement("div");
      workItem.classList.add("galleryItem",'work');
      // Récupérer l'ID de la catégorie de travail pour chaque élément de travail
      const categoryId = work.category.id;
      workItem.setAttribute("data-category", categoryId); // définir l'attribut data-category
      const imageElement = document.createElement("img");
      imageElement.src = work.imageUrl;
      workItem.appendChild(imageElement);
      const nameElement = document.createElement("p");
      nameElement.textContent = work.title;
      workItem.appendChild(nameElement);
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = work.name;
      workItem.appendChild(descriptionElement);
      divworks.appendChild(workItem);
    });
  })
  .catch((error) => {
    console.error(error);
  });

const tableaufiltres = [
  {
    id: 1,
    title: "Abajour Tahina",
    imageUrl: "http://localhost:5678/images/abajour-tahina1651286843956.png",
    categoryId: 1,
    userId: 1,
    category: {
      id: 1,
      name: "Objets",
    },
  },
  {
    id: 2,
    title: "Appartement Paris V",
    imageUrl:
      "http://localhost:5678/images/appartement-paris-v1651287270508.png",
    categoryId: 2,
    userId: 1,
    category: {
      id: 2,
      name: "Appartements",
    },
  },
  {
    id: 3,
    title: "Restaurant Sushisen - Londres",
    imageUrl:
      "http://localhost:5678/images/restaurant-sushisen-londres1651287319271.png",
    categoryId: 3,
    userId: 1,
    category: {
      id: 3,
      name: "Hotels & restaurants",
    },
  },
  {
    id: 4,
    title: "Villa “La Balisiere” - Port Louis",
    imageUrl: "http://localhost:5678/images/la-balisiere1651287350102.png",
    categoryId: 2,
    userId: 1,
    category: {
      id: 2,
      name: "Appartements",
    },
  },
  {
    id: 5,
    title: "Structures Thermopolis",
    imageUrl:
      "http://localhost:5678/images/structures-thermopolis1651287380258.png",
    categoryId: 1,
    userId: 1,
    category: {
      id: 1,
      name: "Objets",
    },
  },
  {
    id: 6,
    title: "Appartement Paris X",
    imageUrl:
      "http://localhost:5678/images/appartement-paris-x1651287435459.png",
    categoryId: 2,
    userId: 1,
    category: {
      id: 2,
      name: "Appartements",
    },
  },
  {
    id: 7,
    title: "Pavillon “Le coteau” - Cassis",
    imageUrl: "http://localhost:5678/images/le-coteau-cassis1651287469876.png",
    categoryId: 2,
    userId: 1,
    category: {
      id: 2,
      name: "Appartements",
    },
  },
  {
    id: 8,
    title: "Villa Ferneze - Isola d’Elba",
    imageUrl: "http://localhost:5678/images/villa-ferneze1651287511604.png",
    categoryId: 2,
    userId: 1,
    category: {
      id: 2,
      name: "Appartements",
    },
  },
  {
    id: 9,
    title: "Appartement Paris XVIII",
    imageUrl:
      "http://localhost:5678/images/appartement-paris-xviii1651287541053.png",
    categoryId: 2,
    userId: 1,
    category: {
      id: 2,
      name: "Appartements",
    },
  },
  {
    id: 10,
    title: "Bar “Lullaby” - Paris",
    imageUrl: "http://localhost:5678/images/bar-lullaby-paris1651287567130.png",
    categoryId: 3,
    userId: 1,
    category: {
      id: 3,
      name: "Hotels & restaurants",
    },
  },
  {
    id: 11,
    title: "Hotel First Arte - New Delhi",
    imageUrl:
      "http://localhost:5678/images/hotel-first-arte-new-delhi1651287605585.png",
    categoryId: 3,
    userId: 1,
    category: {
      id: 3,
      name: "Hotels & restaurants",
    },
  },
];
