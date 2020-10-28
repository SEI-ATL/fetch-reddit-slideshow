document.getElementById('submit-button').addEventListener('click', function() {
    const input = document.getElementById('search-input').value
    getImages()
  })

function getImages(){
fetch(`http://www.reddit.com/search.json?q=cats+nsfw:no`)
.then(res => res.json())
.then(function(imgs){
    const imageURLs = imgs.data.children.map(child => child.data.url) 
    console.log(imageURLs)
    return setInterval(() => slideshow(imageURLs), 2000)
    for (let i = 0; i < imgs.data.children.length; i++){
        console.log(imgs.data.children[i].data.url) // I still need to append them to an img and append them to my container

        
    }
})

.catch(function(error){
    return error
})
}
getImages() // Do I need to call hear if the eventListener for the Go button starts the function?

function slideshow(imgs, i){
    let pic1 = document.querySelector('#img1')
    pic1.setAttribute('src', imgs[Math.floor(Math.random() * imgs.length)])
    pic1.style.height = '300px';
    pic1.style.width = '300px';

    let pic2 = document.querySelector('#img2')
    pic2.setAttribute('src', imgs[Math.floor(Math.random() * imgs.length)])
    pic2.style.height = '300px';
    pic2.style.width = '300px';
    let pic3 = document.querySelector('#img3')
    pic3.setAttribute('src', imgs[Math.floor(Math.random() * imgs.length)])
    pic3.style.height = '300px';
    pic3.style.width = '300px';
}





// Setup page
// Get working api
// Make function to grab 3 images  
// append them in the container div
// set this to cycle every 2-3 seconds

// make a function that will place 3 items in a div every 4 seconds incrementing by i

