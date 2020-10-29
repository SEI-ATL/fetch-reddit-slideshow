

document.getElementById('submit-button').addEventListener('click', function (){
    let query = document.getElementById('query-input').value 
    setInterval(fetchNow, 5000, query);
})
document.getElementById('reset-button').addEventListener('click', function (){
  let images = document.querySelectorAll("#images")
  for (let i=0; i < images.length; i++) {
      let eachImage = images[i]
      eachImage.setAttribute('src', "")
  }
  
    
})
function appendPicToDom(url) {
    const image = document.createElement('img')
    image.src = url
    image.id = "images";
    document.querySelector(".container").appendChild(image)
}



let fetchNow = function(query)
{fetch(`https://www.reddit.com/search.json?nsfw=no&q=${query}`)
.then(response => {
  return response.json();
})
.then(redditData => {
    let photo = getRandomPhoto(redditData.data.children)
    let realUrl = photo.data.url;
    let result = realUrl;
    let noMorePlease = result.toString();
    console.log(noMorePlease)
    if (noMorePlease.includes(".png") || (noMorePlease.includes(".jpg")) ){
        appendPicToDom(noMorePlease);
    } else {
        fetchNow(query);
    }

    
})
}


function getRandomPhoto(randomPhoto) {
    const randomIndex = Math.floor(Math.random() * randomPhoto.length)
    return randomPhoto[randomIndex]

}

