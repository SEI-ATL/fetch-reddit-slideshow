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
        createShowElements(optionsImages);
    });
};

// function createSlides(images) {
//     let slides = [];
//     for (let i = 0; i < images.length; i++) {
//         let slide = document.createElement('img');
//         slide.setAttribute('src', images[i])
//         slides.push(slide);
//     };
// };

function createShowElements(images) {
    let carousel = document.createElement('div');
    carousel.setAttribute('id', 'carouselExampleControls');
    carousel.classList.add('carousel', 'slide');
    carousel.setAttribute('data-ride', 'carousel')
    let inner = document.createElement('div');
    inner.classList.add('carousel-inner');
    let item = document.createElement('div');
    item.classList.add('carousel-item');
    // let image = document.createElement('img');
    // image.classList.add('d-block', 'w-100');
    let previous = document.createElement('a');
    previous.classList.add('carousel-control-prev');
    previous.setAttribute('href', '#carouselExampleControls');
    previous.setAttribute('role', 'button');
    previous.setAttribute('data-slide', 'prev');
    let previousIcon = document.createElement('span');
    previousIcon.classList.add('carousel-control-prev-icon');
    previousIcon.setAttribute('aria-hidden', 'true');
    let previousText = document.createElement('span');
    previousText.classList.add('sr-only');
    previousText.textContent = 'Previous';
    let next = document.createElement('a');
    next.classList.add('carousel-control-next');
    next.setAttribute('href', '#carouselExampleControls');
    next.setAttribute('role', 'button');
    next.setAttribute('data-slide', 'next');
    let nextIcon = document.createElement('span');
    nextIcon.classList.add('carousel-control-next-icon');
    nextIcon.setAttribute('aria-hidden', 'true');
    let nextText = document.createElement('span');
    nextText.classList.add('sr-only');
    nextText.textContent = 'Next';
    let slides = []
    for (let i = 0; i < images.length; i++) {
        let slide = document.createElement('img');
        slide.setAttribute('src', images[i]);
        slide.classList.add('d-block', 'w-100')
        slides.push(slide);
        // item.append(slides[i]);
        // main.append(slides[i]);
    };
    createSlideshow(slides);
};

function createSlideshow(slides) {
    main.append(carousel);
    carousel.append(inner);
    inner.append(item);
    // item.append(image);
    for (let i = 0; i < slides.length; i++) {
        item.append(slides[i]);
    };
    slides[0].classList.remove('carousel-item');
    slides[0].classList.add('carousel-item-active');
    carousel.append(previous);
    previous.append(previousIcon);
    previous.append(previousText);
    carousel.append(next);
    next.append(nextIcon);
    next.append(nextText);
    main.append(reset);
};

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

