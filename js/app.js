const main = document.querySelector('main');
const header = document.querySelector('header');
const search = document.querySelector('#search');
const criteria = document.querySelector('#criteria');
const reset = document.createElement('button');
reset.setAttribute('id', 'reset');
reset.textContent = 'Reset';

search.addEventListener('click', function() {
    const data = criteria.value;
    getImages(data);
});

reset.addEventListener('click', function() {
    location.reload();
    return false;
});

function getImages(type) {
    fetch(`https://www.reddit.com/search.json?nsfw=no&q=${type}`)
    .then(result => result.json())
    .then(options => {
        const optionsData = options.data.children;
        let optionsURLs = [];
        let optionsImages = [];
        for (let i = 0; i < optionsData.length; i++) {
            optionsURLs.push(optionsData[i].data.url);
        };
        for (let i = 0; i < optionsURLs.length; i++) {
            if (optionsURLs[i].endsWith('img') || optionsURLs[i].endsWith('jpg') || optionsURLs[i].endsWith('png')) {
                optionsImages.push(optionsURLs[i]);
            }
        };
        clearInitial();
        createSlides(optionsImages);
    });
};

function createSlides(images) {
    let slides = [];
    for (let i = 0; i < images.length; i++) {
        let slide = document.createElement('img');
        slide.setAttribute('src', images[i])
        slides.push(slide);
    };
    for (let i = 0; i < slides.length; i++) {
        main.append(slides[i]);
    };
    main.append(reset);
};

// function createShowElements() {
//     let div = document.createElement('div');
// }

// function displaySlideshow(slides) {

// }

{/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}

// function changeSlide(images) {
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//         main.append(slides[i]);
//         setInterval(() => {
//             slides[i].style.display = '';
//         }, 1000);
//         slides[i].style.display = 'none';
//         if (i === slides.length) {
//             i = 0;
//         }
//     };
// };

// function appendSlide(images) {
//     for (let i = 0; i < images.length; i++) {
//         let slide = querySelector('img');
//         slide.src = images[i];
//         main.append(slide);
//     }
// }

function clearInitial() {
    header.style.display = 'none';
    search.style.display = 'none';
    criteria.style.display = 'none';
};

// A combination of operations that I tried to implement in order to make this an actual slideshow, as opposed to just a page displaying all the image results. I also tried setTimeout and setInterval, to no effect. In the below, the for loop would have gone in place of the second for loop in the createSlideshow function. No matter what I did, either everything showed at once or nothing showed at all.

// for (let i = 0; i < slides.length; i++) {
//     if (Date.now() % 1000 === 0) {
//         hideSlide(slides[i]);
//     } else {
//         showSlide(slides[i]);
//     }
// };

// function showSlide(slide) {
//     main.append(slide);
// };

// function hideSlide(slide) {
//     slide.style.display = 'none';
// };

