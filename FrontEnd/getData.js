//les categories
//intercepter l'element
const categories = document.getElementById("categorie")
//fetch get recuperer
fetch('http://localhost:5678/api/categories')
//on veut recuperer une response en json
  .then(Response => Response.json())
  .then(data => {
    const categoriesList = document.createElement("div")
    categoriesList.classList.add('bloccategories')
    categories.appendChild(categoriesList)
    data.forEach(category => {
      const tous = document.createElement('p')
      //tous.innerHTML = 'tous'
      categoriesList.appendChild(tous)
      const objets = document.createElement("p")
      objets.classList.add('objets')
      objets.textContent = category.name
      categoriesList.appendChild(objets)
      const appartements = document.createElement("p")
       //appartements.classList.add('objets', 'objets:hover')
      //appartements.textContent = category.name
      categoriesList.appendChild(appartements)
      const hotelsrestaurants = document.createElement("p")
      //hotelsrestaurants.classList.add('objets', 'objets:hover')
      //hotelsrestaurants.textContent = category.name
      categoriesList.appendChild(hotelsrestaurants)
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
  //les images
const works = document.getElementById("work")
fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => {
    const divworks = document.createElement("div")
    divworks.classList.add("gallery")
    works.appendChild(divworks)
    data.forEach(work => {
      const imageElement = document.createElement("img")
      imageElement.src = work.imageUrl
      divworks.appendChild(imageElement)
      const nameElement = document.createElement("p")
      nameElement.textContent = work.title
      divworks.appendChild(nameElement)
      const descriptionElement  = document.createElement("p")
      descriptionElement .textContent = work.name
      divworks.appendChild(descriptionElement)
    })
  })
  .catch(error => {
    console.error(error)
  })
*/