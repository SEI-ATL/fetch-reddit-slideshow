const search = document.querySelector('.search-btn')
console.log(search)

function fetchImage(search) {
    fetch (`https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`)
    .then(response => {
        return pokemonData.json();
    })
    .then(pokemonData => {
        const imageNamePairs = pokemonData.results.slice(0,3);
        // console.log(imageNamePairs);
        for (const image of imageNamePairs) {
            const name = image.name;
            const url = image.url;
            const imgs = document.querySelector('img');
            imgs.setAttribute('src', url);
            console.log(imgs);
        }
        // imageNamePairs.filter = 
        // const mewTwoCard = makePokemonCard(mewTwo);
        // container.appendChild(mewTwoCard);
    })
    .catch(err => console.log(err));

    function getRandomPost(posts) {
        const randomIndex = Math.floor(Math.random() * posts.length)
        return posts[randomIndex]
    }
}