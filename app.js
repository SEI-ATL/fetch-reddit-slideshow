let intervalID = ''
document.getElementById('submit-button').addEventListener('click', function() {
    const input = document.getElementById('search-input')
    const inputValue = input.value
    // console.log(inputValue)
    return getImages(inputValue)
  })

document.getElementById('clear-button').addEventListener('click', function() {
    let pic1 = document.querySelector('#img1')
    pic1.setAttribute('src', 'https://i1.wp.com/cornellsun.com/wp-content/uploads/2020/06/1591119073-screen_shot_2020-06-02_at_10.30.13_am.png?fit=700%2C652')
    pic1.style.height = '300px';
    pic1.style.width = '300px';
    
    let pic2 = document.querySelector('#img2')
    pic2.setAttribute('src', 'https://i1.wp.com/cornellsun.com/wp-content/uploads/2020/06/1591119073-screen_shot_2020-06-02_at_10.30.13_am.png?fit=700%2C652')
    pic2.style.height = '300px';
    pic2.style.width = '300px';
    
    let pic3 = document.querySelector('#img3')
    pic3.setAttribute('src', 'https://i1.wp.com/cornellsun.com/wp-content/uploads/2020/06/1591119073-screen_shot_2020-06-02_at_10.30.13_am.png?fit=700%2C652')
    pic3.style.height = '300px';
    pic3.style.width = '300px';
    clearInterval('')
  })

function getImages(inputValue){
fetch(`http://www.reddit.com/search.json?q=${inputValue}.jpg+nsfw:no`)
.then(res => res.json())
.then(function(imgs){
    const word = '.jpg';
    let imageURLs = imgs.data.children.map(child => child.data.url)
    clearInterval('')
    return setInterval(() => slideshow(imageURLs), 5000)
})

.catch(function(error){
    return error
})
}

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

