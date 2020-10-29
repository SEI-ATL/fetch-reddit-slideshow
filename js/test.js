    // imageOnlyArray.forEach(appendImageToDom);

    // setInterval(function(imageOnlyArray) {
    //     var imageDisplay = document.querySelector('img');
    //     imageDisplay.src = imageOnlyArray[num];
    //     num++;
    //     if (num == imageOnlyArray.length) {
    //         num = 0;
    //     }
    // },5000);

    // console.log(document.querySelectorAll('img').src);







// function appendImageToDom (image) {

//     let source = document.createElement('img');
//     source.src = image;
//     document.querySelector('.container').appendChild(source);

//     }




// fetch(`http://www.reddit.com/search.json?q=${searchText}+nsfw:no`)
// .then(response => {
//     return response.json();
// })
// .then(searchResults => {
//     const resultArray = searchResults.data.children
//     const newImageArray = (imgArray(resultArray));
//     const imageOnlyArray = newImageArray.filter(function(string) {
//         return string.endsWith(".jpg" || ".png");
//     })

//     appendImageToDom(imageOnlyArray);

//     console.log(imageOnlyArray);

// })