
document.addEventListener("DOMContentLoaded", function() {
  
  // Add event listener to handle form submits and axios request 
  let form = document.getElementById("input-form");
  form.addEventListener("submit", async function(event) {
    
    // Prevent Page from reloading 
    event.preventDefault();
    
    // Get search term 
    let searchTerm = event.target.searchTerm.value;
    
    // Make axios request 
    let response = await axios.get("http://api.giphy.com/v1/gifs/search", {
      headers: {
        "content-type": 'application/json',
      },
      params: {
        q: searchTerm,
        api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
      }
    });
    
    // Choose random gifs from results 
    let randomNum = Math.floor(Math.random() * response.data.data.length);
    let randomGif = response.data.data[randomNum].images.fixed_width.url;
    
    // Create an image element with the GIF 
    let imgToAppend = document.createElement("img")
    imgToAppend.setAttribute("src", randomGif);
    imgToAppend.className = "gif-item";
    
    // Append image element to dom 
    let gifList = document.getElementById("gif-list");
    gifList.appendChild(imgToAppend);
  });
  
  // Add event listener to handle getting rid of the gifs 
  let deleteButton = document.getElementById("delete-button");
  deleteButton.addEventListener("click", function() {
    
    // Get the gif-list from the dom
    let gifList = document.getElementById("gif-list");
      
    // Loop through and delete all its children
    while (gifList.childNodes.length >= 1) {
      gifList.childNodes[0].remove();
    }
    
  })
  
});