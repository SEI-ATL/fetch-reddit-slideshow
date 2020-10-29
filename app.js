
const img = document.createElement("img")
    img.setAttribute('src', "realUrl")
    img.setAttribute('alt',"Image")
    document.querySelector("#reddit-display").append(img)

document.getElementById("submit-button").addEventListener('click', function(){
     const genre = document.getElementById('search').value
    getRandomPhoto(genre)    
})

let query = 'cats'
fetch(`https://www.reddit.com/search.json?nsfw=no&q=${query}`)
.then(response => {
  return response.json();
})
.then(redditData => {
    let photo = getRandomPhoto(redditData.data.children)
    let realUrl = photo.data.url;
     console.log(realUrl);
})
.catch(err => console.log(err));
function getRandomPhoto(randomPhoto) {
    const randomIndex = Math.floor(Math.random() * randomPhoto.length)
    return randomPhoto[randomIndex]
}