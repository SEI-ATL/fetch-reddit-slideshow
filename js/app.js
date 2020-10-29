const elementsToDisappear = document.querySelector("#search");
const pauseButton = document.querySelector(".stop");

const container = document.querySelector('.container');

document.querySelector('.button').onclick = function() {
    elementsToDisappear.style.visibility = "hidden";
    pauseButton.style.visibility = "visible";

    document.querySelector('img').style.visibility = 'visbile';
    var input = document.querySelector('.input').value;
    console.log(input);
    fetch(`http://www.reddit.com/search.json?q=${input}+nsfw:no`)
    .then(response => {
    return response.json();
    })
    .then(searchResults => {
    const resultArray = searchResults.data.children
    const newImageArray = (imgArray(resultArray));
    const imageOnlyArray = newImageArray.filter(function(string) {
        return string.endsWith(".jpg" || ".png");
    })

    container.style.visibility = "visible";
    myVar = setInterval(placeImage, 3000);
        function placeImage (){
            let i = randomIndex(imageOnlyArray);
            var imgSource = document.querySelector('img');

            imgSource.src = imageOnlyArray[i];

            document.querySelector('img').style.visibility = 'visbile';
        }

        return myVar



})

// var num = 0

function randomIndex (array) {
    var randomNumber = Math.floor(Math.random() * array.length)
    return randomNumber
}




}

function deleteChild() {
    var parent = document.querySelector('.container');
    var child = parent.lastElementChild;
    while (child) {
        parent.removeChild(child);
        child = parent.lastElementChild;
    }
}


pauseButton.onclick = function() {
    elementsToDisappear.style.visibility = "visible";
    pauseButton.style.visibility = "hidden";
    document.querySelector('.input').value = null;
    container.style.visibility = "hidden"
    console.log(container);
    clearInterval(placeImage);

}




function imgArray(array) {
    const imageArray = [];
    for (i = 0; i < array.length; i++) {
        imageUrl = array[i].data.url;
        imageArray.push(imageUrl);

    }
    return imageArray
}

console.log(elementsToDisappear)
