const apiURL = "http://localhost:5678/api"

fetch(
    apiURL + '/works', 
    { 
        method: 'GET',
        headers: { 
            "Content-Type" : "application/json" 
        },
    })
.then(function(response) {
    const premiereImage = response[0].imageUrl
    return response.blob();
})
//document.getElementById("premiereImage").src = premiereImage