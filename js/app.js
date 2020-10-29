let input = document.querySelector('input');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');
let slideshow = document.querySelector('.slideshow');

let numImages = 5;

// Functions

let runSlideshow = (imageUrls => {
  let i = 1;
  setInterval(() => {
    slideshow.style.backgroundImage = `url(${imageUrls[i]})`;
    if (i < numImages - 1) {
      i++;
    } else {
      i = 0;
    }
  }, 1000);
});

let handleClickStart = () => {

  let searchTerm = input.value;

  fetch(`https://www.reddit.com/search.json?nsfw=no&q=${searchTerm}`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    
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

    slideshow.style.backgroundImage = `url(${imageUrls[0]})`;
    slideshow.classList.remove('hidden');

    // Run the "runSlideshow" function, and give it our new array of images as an argument

    runSlideshow(imageUrls);

  })
  .catch(error => {
    console.log(`Crap. There was an error: ${error}`);
  });

}

let = handleClickStop = () => {
  slideshow.classList.add('hidden');
  input.value = '';
};


// Event listeners

startButton.addEventListener('click', handleClickStart);
stopButton.addEventListener('click', handleClickStop);
















































// Version 1


// let input = document.querySelector('input');
// let startButton = document.querySelector('.start');
// let stopButton = document.querySelector('.stop')
// let slideshow = document.querySelector('.slideshow');
// let allImages = document.querySelectorAll('img');

// startButton.addEventListener('click', handleClickStart);
// stopButton.addEventListener('click', handleClickStop)

// function handleClickStart() {

//   let searchTerm = input.value;



//   fetch('https://www.reddit.com/search.json?nsfw=no&q=' + searchTerm)
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     debugger;
//     let totalImages = 0;
//     for (let i = 0; i < data.data.children.length; i++) {
//       let url = data.data.children[i].data.url;
//       if (url.endsWith('jpg') === true || url.endsWith('png') === true) {
//         let image = allImages[i];
//         image.src = data.data.children[i].data.url;
//         totalImages++;
//       }
//       if (totalImages >= 6) {
//         break;
//       }
//     }
    
    
    
    
//   })
//   .catch(error => {
//     console.log(error);
//   })

// }

// function handleClickStop() {
//  for (let i = 0; i < allImages.length; i++) {
//    slideshow.removeChild(allImages[i]);
//  }
//  input.value = '';
// }





    // let leftButton = document.querySelector('.left');
    // let rightButton = document.querySelector('.right');
    // let firstImage = document.querySelector('img');
    // firstImage.classList.add('front-image');

    // leftButton.addEventListener('click', function() {
    //   // debugger;
    //   let frontImage = document.querySelector('.front-image');
    //   let frontImageId = frontImage.id;
    //   if (frontImageId === '0') {
    //     frontImageId = 5;
    //   } else {
    //     frontImageId--;
    //   }
    //   frontImage.classList.remove('front-image');
    //   let newFrontImage = document.querySelector(`#${frontImageId}`);
    //   newFrontImage.classList.add('front-image');
    // })
    
    




    
