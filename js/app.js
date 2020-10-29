let searchTerm = 'cats';
let input = document.getElementsByTagName('input');
let button = document.querySelector('#new_image');

//searchTerm = input.innerText;

const imgLoop = () => {
fetch(`https://www.reddit.com/search.json?nsfw=no&q=${searchTerm}`) // fetches the JSON data.
.then(response => response.json())
.then(image => {
    const imgChildren = image.data.children;
    //console.log(imgChildren);
    const filterImgChildren = imgChildren.filter(img => 
        img.data.url.includes('.jpg')
    ).map(img => img.data.url);
    console.log(filterImgChildren);
    
appendImgToDom(filterImgChildren[Math.floor(Math.random() * filterImgChildren.length)])
    
})
.catch(error => {
    console.log(error)
})
}

setInterval(imgLoop, 5000)

function appendImgToDom(image) {
    const carouselImg = document.createElement('img');
    carouselImg.setAttribute('src', `${image}`);
    carouselImg.setAttribute('alt', `Your image selection has arrived`);
    document.querySelector('#imgContainer').append(carouselImg);
}






