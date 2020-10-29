document.getElementById('submit-button').addEventListener('click', function() {
    const input = document.getElementById('search-input')
    const inputValue = input.value
    // console.log(inputValue)
    return getImages(inputValue)
  })

document.getElementById('clear-button').addEventListener('click', function() {
    let pic1 = document.querySelector('#img1')
    pic1.setAttribute('src', '')
    pic1.style.height = '300px';
    pic1.style.width = '300px';

    let pic2 = document.querySelector('#img2')
    pic2.setAttribute('src', '')
    pic2.style.height = '300px';
    pic2.style.width = '300px';
    let pic3 = document.querySelector('#img3')
    pic3.setAttribute('src', '')
    pic3.style.height = '300px';
    pic3.style.width = '300px';
    clearInterval('')
  })
let intervalID = ''

function getImages(inputValue){
    // console.log('hello', inputValue)
fetch(`http://www.reddit.com/search.json?q=${inputValue}+nsfw:no`)
.then(res => res.json())
.then(function(imgs){
    const word = '.jpg';
    const imageURLs = imgs.data.children.map(child => child.data.url)
    // console.log('hello 2') 
    clearInterval('')
    console.log(imageURLs)
    return setInterval(() => slideshow(imageURLs), 5000)
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

