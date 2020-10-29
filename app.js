let input = document.querySelector('input');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');
let container = document.querySelector('.container');

let numImages = 5;

let runSlideshow = (imageUrls => {
    let slideshow = document.querySelector('.slideshow')
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

function handleClickStart() {

    let searchTerm = input.value;

    fetch('https://www.reddit.com/search.json?nsfw=no&q=' + searchTerm)
    .then(response => {
        return response.json();
    })
    .then(data => {

        let imageUrls = [];
        let i = 0;
        while (imageUrls.length < numImages) {
            let imageUrl = data.data.children[i].data.url;
            if (imageUrl.endsWith('jpg') === true || imageUrl.endsWith('png') === true) {
                imageUrls.push(imageUrl);
            }
            i++;
            }
        


let slideshow = document.createElement('div')
slideshow.classList.add('slideshow')
slideshow.style.backgroundImage = `url(${imageUrls[0]})`;
container.appendChild(slideshow);




runSlideshow(imageUrls);



    })
    .catch(error => {
        console.log(error);
    })
}

function handleClickStop() {
    let slideshow = document.querySelector('.slideshow');
    container.removeChild(slideshow);
    input.value = '';
}




startButton.addEventListener('click', handleClickStart)
stopButton.addEventListener('click', handleClickStop)



// let leftButton = document.querySelector('.left');
// let rightButton = document.querySelector('.right');
// let firstimage = document.querySelector('img');
// firstimage.classList.add('frontimage')
// leftButton.addEventListener('click', function() {
//    let frontImage = document.querySelector('.frontimage')
//    let frontImageId = frontImage.id;
//    if (frontImageId === '0') {
//        frontImageId = 5;
//    } else {
//        frontImageId--;
//    }
//     frontImage.classList.remove('.frontimage')
//     let newFrontImage = document.querySelector(`#${frontImageId}`)
//     frontImage.classList.add('frontimage')

// })
// function runSlideshow () {
    //     image.style.zIndex = 1;
    //     }
    //     runSlideshow();

