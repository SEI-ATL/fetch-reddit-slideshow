let input = document.querySelector('input');
let startButton = document.querySelector('.start');
startButton.addEventListener('click', handleClickStart);
let stopButton = document.querySelector('.stop');
let slideshow = document.querySelector('.slideshow');
stopButton.addEventListener('click', handleClickStop);
let allImages = document.querySelectorAll('img');




function handleClickStart() {

    let searchTerm = input.value;

    fetch('https://www.reddit.com/search.json?nsfw=no&q=' + searchTerm)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let totalImages = 0;
        for (let i = 0; i < data.data.children.length; i++) {
            let url = data.data.children[i].data.url;
            if (url.endsWith('jpg') === true || url.endsWith('png') === true) {
                let image = allImages[i];
                image.src = data.data.children[i].data.url;
                totalImages++;
            }
            if (totalImages >= 5) {
                break;
            }
        }
    })
    .catch(error => {
        console.log(error);
    })
}

function handleClickStop() {
    for (let i = 0; i < allImages.length; i++) {
        slideshow.removeChild(allImages[i])
    }
    input.value = '';
}







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

