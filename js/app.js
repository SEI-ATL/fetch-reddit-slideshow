    document.getElementById('submit-button').addEventListener('click', function() {
    const search = document.getElementById('search-input').value
    var interval = setInterval(() => fetchImage(search), 5000);
    let button = document.querySelector('#submit-button')
    let title = document.querySelector('.title')
    let inputBox = document.querySelector('#search-input')
    button.style.visibility = 'hidden'
    title.style.visibility = 'hidden'
    inputBox.style.visibility = 'hidden'


    
    document.getElementById('reset-button').addEventListener('click', function() {
        clearInterval(interval)
    button.style.visibility = 'visible'
    title.style.visibility = 'visible'
    inputBox.style.visibility = 'visible'

    
})
})

function fetchImage(search) {
    fetch (`https://www.reddit.com/search.json?q=${search}+nsfw:no`)
    .then(redditData => redditData.json())
    .then((json) => {
        const randomPost = getRandomPost(json.data.children)
        const image = randomPost.data.thumbnail;
        console.log("hello", image)

        appendImageToDom(image);

    })

    function getRandomPost(posts) {
        const randomIndex = Math.floor(Math.random() * posts.length)
        return posts[randomIndex]
    }
}
// Add picture to DOM
// Update picture every 5 seconds
// cancel button

function appendImageToDom(image) {
    document.getElementById('reddit-image').setAttribute('src', image);


    // randomImage.src = image;
    // document.querySelector('#display-search').append(randomImage);
}

// set interval id somewhere



// document.getElementById('reddit-image').setAttribute('src', image);