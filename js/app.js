let input = document.querySelector('input');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');
let container = document.querySelector('.container');
let heading = document.querySelector('.heading');

let numImages = 5;

// Functions

let runSlideshow = (imageUrls => {
  let slideshow = document.querySelector('.slideshow');
  let i = 1;
  setInterval(() => {
    slideshow.style.backgroundImage = `url(${imageUrls[i]})`;
    if (i < numImages - 1) {
      i++;
    } else {
      i = 0;
    }
  }, 3000);
});

let handleClickStart = () => {

  let searchTerm = input.value;

  fetch(`https://www.reddit.com/search.json?nsfw=no&q=${searchTerm}`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    
    heading.classList.add('hidden');
    stopButton.classList.remove('hidden');

    // Filter through the Reddit search results for images ending with "jpg" or "png", and add them to an "images" array

    let imageUrls = [];
    let i = 0;
    while (imageUrls.length < numImages) {
      let imageUrl = data.data.children[i].data.url;
      if (imageUrl.endsWith('jpg') === true || imageUrl.endsWith('png') === true) {
        imageUrls.push(imageUrl);
      }
      i++;
    }

    // Post the first image, then unhide the slideshow div

    let slideshow = document.createElement('div');
    slideshow.classList.add('slideshow');
    slideshow.style.backgroundImage = `url(${imageUrls[0]})`;
    container.appendChild(slideshow);

    // Run the "runSlideshow" function, and give it our new array of images as an argument

    runSlideshow(imageUrls);

  })
  .catch(error => {
    console.log(`Crap. There was an error: ${error}`);
  });

}

let = handleClickStop = () => {
  let slideshow = document.querySelector('.slideshow');
  container.removeChild(slideshow);
  heading.classList.remove('hidden');
  stopButton.classList.add('hidden');
  input.value = '';
};


// Event listeners

startButton.addEventListener('click', () => {
  if (input.value !== '') {
    handleClickStart();
  }
});
stopButton.addEventListener('click', handleClickStop);