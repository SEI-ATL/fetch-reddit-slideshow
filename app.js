let query = null
let title = document.querySelectorAll('.center');
let stop = document.querySelectorAll('.stop');

var myVar = null;

function imgArray(array) {
    const imageArray = [];
    for (i = 0; i < array.length; i++) {
        imageUrl = array[i].data.url;
        imageArray.push(imageUrl)
    }
    return imageArray
}

function newElement(element) {
    const newElement = document.createElement(element);
    return newElement;
}


// const mainContainer = document.querySelector('.center')

// const hideSearchBar = document.querySelector('#search-button')
// .addEventListener('click', function() {
    
// //     const input = document.querySelector('#search-bar').value
// //     document.querySelector('#search-bar').style.display = "none";
// //         // event.preventDefault()
    
    
    
// });

function randomIndex(array) {
    var randomNumber = Math.floor(Math.random() * array.length)
    return randomNumber
}

function setHidden(array) {
    for (i = 0; i < array.length; i++)
    array[i].style.visibility = 'hidden'
}

function setVisibile(array) {
    for (i = 0; i <array.length; i++)
     array[i].style.visibility = 'visible'
    
}

document.querySelector('#search-button').addEventListener('click', function () {
    let query = document.querySelector('#search-bar').value;

    setHidden(title);
    setVisibile(stop);
    
fetch(`https://www.reddit.com/search.json?nsfw=no&q=${query}`)
    .then(response => {
        return response.json();
    })
    .then(redditData => {
        const resultArray = redditData.data.children;
        const newImageArray = (imgArray(resultArray));
        const imageOnlyArray = newImageArray.filter(function(string) {
            return string.endsWith(".jpg");
        })
        
        myVar = setInterval(placeImage, 3000);
        function placeImage () {
            let i = randomIndex(imageOnlyArray);
            var imgSource = document.querySelector('#image');
            imgSource.src = imageOnlyArray[i];
        }    
        // function getRandomImage(imageUrl) {
        //     const randomIndex = Math.floor(Math.random() * imageUrl.length)
        //     return imageUrl[randomIndex]
        // }
        
    })
})


// function appendImageToDom(image, imageUrl){
//     const makeImage = document.createElement('img')
//     img.setAttribute('src', 'realUrl')
//     img.setAttribute('alt', 'Image')
//     document.querySelector('.center').append(img)

// }














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