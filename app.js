const mainContainer = document.querySelector('.center')

const hideSearchBar = document.querySelector('#search-button')
.addEventListener('click', function() {
    
    const input = document.querySelector('#search-bar').value
    document.querySelector('#search-bar').style.display = "none";
        // event.preventDefault()
    
    
    
});


function appendImageToDom(image, imageUrl){
    const makeImage = document.createElement('img')
    img.setAttribute('src', 'realUrl')
    img.setAttribute('alt', 'Image')
    document.querySelector('.center').append(img)

}





let query = 'soccer'
function getImage() {
    fetch(`https://www.reddit.com/search.json?nsfw=no&q=${query}`)
    .then(response => {
        return response.json();
    })
    .then(redditData => {
        const imageUrl = redditData.data.children.map(child => child.data.url)
        console.log(imageUrl);
        // imageCarousel(imageUrl)
            
        function getRandomImage(imageUrl) {
            const randomIndex = Math.floor(Math.random() * imageUrl.length)
            return imageUrl[randomIndex]
        }
        
    })
    .catch(err => console.log(err));

}



// function imageCarousel(redditData) {
//     const carousel = document.createElement('div');
//     carousel.setAttribute('id', 'carouselExampleSlidesOnly');
//     carousel.classList('carousel', 'slide');
//     carousel.setAttribute('data-ride', 'carousel')
//     mainContainer.appendChild(carousel);
    
//     const innerCarousel = document.createElement('div');
//     innerCarousel.classList('carousel-inner')
//     carousel.append(innerCarousel)
    
//     let activeCarousel = document.createElement('div');
//     activeCarousel.classList('carousel-item', 'active');
//     innerCarousel.append(activeCarousel)
    
//     const srcTag = document.createElement('img');
//     srcTag.setAttribute('src', imageUrl[Math.floor(Math.random() * imageUrl.length)]);
//     srcTag.classList('d-block','w-100');
//     srcTag.setAttribute('alt', `this is ${query}`);
//     innerCarousel.appendChild(srcTag);

//     let activeCarousel = document.createElement('div');
//     activeCarousel.classList('carousel-item');
//     innerCarousel.append(activeCarousel);
    
//     const srcTag = document.createElement('img');
//     srcTag.setAttribute('src', imageUrl[Math.floor(Math.random() * imageUrl.length)]);
//     srcTag.classList('d-block','w-100');
//     srcTag.setAttribute('alt', `this is ${query}`);
//     innerCarousel.appendChild(srcTag);
    
//     let activeCarousel = document.createElement('div');
//     activeCarousel.classList('carousel-item');
//     innerCarousel.append(activeCarousel);
    
//     const srcTag = document.createElement('img');
//     srcTag.setAttribute('src', imageUrl[Math.floor(Math.random() * imageUrl.length)]);
//     srcTag.classList('d-block','w-100');
//     srcTag.setAttribute('alt', `this is ${query}`);
//     innerCarousel.appendChild(srcTag);

//     return carousel;





// }




//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="...">
//     </div>
//   </div>
// </div> */}