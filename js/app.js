let searchText = null;

let title = document.querySelectorAll(".title");

let stop = document.querySelectorAll(".stop");

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

// function appendToDom(array) {
//     for (i = 0; i < array.length; i++) {
//         var imageDiv = newElement('div');
//         imageDiv.classList.add('carousel-item', 'active');
//         imageDiv.setAttribute('data-interval', '2500')
//         var imageSource = newElement('img');
//         imageSource.classList.add('d-block', 'w-100')
//         imageSource.setAttribute('src', array[i]);
//         imageDiv.appendChild(imageSource);
//         let container = document.querySelector('.carousel-inner');
//         container.appendChild(imageDiv);
//     }
// }

function randomIndex (array) {
    var randomNumber = Math.floor(Math.random() * array.length)
    return randomNumber
}

// function setImgSrc(array) {
//     let i = randomIndex(array);
//     var imgSource = document.querySelector('#image');
//     imgSource.src = array[i];    
// }

function setHidden(array) {
    for (i = 0; i < array.length; i++)
    array[i].style.visibility = 'hidden'
}

function setVisible(array) {
    for (i = 0; i < array.length; i++)
    array[i].style.visibility = 'visible'
}

document.querySelector('#go').addEventListener('click', function() {
    let searchText = document.querySelector('#search').value;

    // let title = document.querySelectorAll(".title")
    setHidden(title);
    // let stop = document.querySelectorAll(".stop")
    setVisible(stop);

    fetch(`http://www.reddit.com/search.json?q=${searchText}+nsfw:no`)
    .then(response => {
        return response.json();
    })
    .then(searchResults => {
        const resultArray = searchResults.data.children;
        const newImageArray = (imgArray(resultArray));
        const imageOnlyArray = newImageArray.filter(function(string) {
            return string.endsWith(".jpg");
        })
        
        // setInterval(appendToDom(imageOnlyArray), 3000);
    
        // setInterval(setImgSrc(imageOnlyArray), 3000);
        myVar = setInterval(placeImage, 3000);
        function placeImage (){
            let i = randomIndex(imageOnlyArray);
            var imgSource = document.querySelector('#image');
            imgSource.src = imageOnlyArray[i];
        }
        // setInterval(function() {
        //     let i = randomIndex(imageOnlyArray);
        //     var imgSource = document.querySelector('#image');
        //     imgSource.src = imageOnlyArray[i];
        // }, 3000)
    
    })
    
})

document.querySelector('#stop').addEventListener('click', function() {
    // let title = document.querySelectorAll(".title")
    setVisible(title);
    // let stop = document.querySelectorAll(".stop")
    setHidden(stop);
    clearInterval(myVar);
    searchText = null;
    document.querySelector('#search').value = null;
})

// let title = document.querySelectorAll(".title")
// console.log(title[0])

// let searchText = "cats";

// searchResults.data.children[5].data.url
