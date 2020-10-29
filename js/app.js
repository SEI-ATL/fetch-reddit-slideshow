// let query = 'cats'
fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
.then(response => {
  return response.json();
})
.then(pokemonData => {
    // const mewTwoCard = makePokemonCard(mewTwo);
    // container.appendChild(mewTwoCard);
})
.catch(err => console.log(err));

function makeSlideShow (array) {
    const imageNamePairs = pokemonData.results;
    // filter? map?
    for (let i = 0; i < imageNamePairs.length; i++) {
        const name = imageNamePairs[i].name;
        const url = imageNamePairs[i].url;
        // push to two separate arrays??
    }
    // const slideShow = document.createElement('div');
}
