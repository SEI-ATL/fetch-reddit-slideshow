let searchTerm = 'cats';

fetch(`https://www.reddit.com/search.json?nsfw=no&q=${searchTerm}`) // fetches the JSON data.
.then(response => response.json())
.then(image => {
    const imgChildren = image.data.children;
    //console.log(imgChildren);
    const filterImgChildren = imgChildren.filter(img => 
        img.data.url.includes('.jpg')
    ).map(img => img.data.url);
    console.log(filterImgChildren);

    //console.log(image.data.children[0].data.url);
})
.catch(error => {
    console.log(error)
})

