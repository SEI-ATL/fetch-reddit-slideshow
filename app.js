document.getElementById('submit-button').addEventListener('click', function() {
    //e.preventDefault()
    const searchTerm = document.querySelector('#search-input').value ;
    fetchPokemon(searchTerm);
})

function fetchPokemon(searchTerm) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(pokemon => {
        const pokemonImage = pokemon.sprites.other['official-artwork']['front_default']
        addPokemonImage(pokemonImage);
    })
.catch(error => {
    console.log(error);
})
}


function addPokemonImage(pic) {
    const elem = document.getElementById('firstImg');
    elem.setAttribute('src', pic);
}