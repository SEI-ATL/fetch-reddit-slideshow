document.getElementById('submit-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value
    fetchPokemon(searchTerm)
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
    makePokemonPhoto(pokemonImage);
})
.catch(error => {
    console.log(error);
})}
function makePokemonPhoto(pic) {
    const elem = document.getElementById('firstImg')
    elem.setAttribute('src', pic)};