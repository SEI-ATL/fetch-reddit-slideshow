// let query = 'cats'
fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
.then(response => {
  return response.json();
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

function makeSlideShow (array) {
    
    // filter? map?
    // for (let i = 0; i < imageNamePairs.length; i++) {
    //     const name = imageNamePairs[i].name;
    //     const url = imageNamePairs[i].url;
    //     // push to two separate arrays??
    // }
    // const slideShow = document.createElement('div');
}

// one image on the screen and change the SRC link each time?
// use setInterval

function makePokemonCard(pokemon) {
        // Create a div element, add class, add style X
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
        // Create an image tag, add class, add source, add alt
    const image = document.createElement('img');
    image.classList.add('card-img-top');
    image.setAttribute('src', pokemon.image)
    image.setAttribute('alt', `This is ${pokemon.name}`);
        // Append the image to the card div
    card.appendChild(image);

        // Create div, add class
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

            // Create h5 element, add class, add text
    const nameElement = document.createElement('h5');
    nameElement.classList.add('card-title');
    nameElement.textContent = pokemon.name;
            // Create p tag, add class, add text
    const heightWeight = document.createElement('p');
    heightWeight.classList.add('card-text');
    heightWeight.textContent = `Height: ${pokemon.height}, Weight: ${pokemon.weight}`

    const move = document.createElement('p');
    move.classList.add('card-text');
    move.textContent = `Move: ${pokemon.move}`;

    const ability = document.createElement('p');
    ability.classList.add('card-text');
    ability.textContent = `Ability: ${pokemon.ability}`;
            // Create a tag, add 2 class, add href, add text
    const purchaseLink = document.createElement('a');
    purchaseLink.classList.add('btn', 'btn-primary');
    purchaseLink.setAttribute('href', pokemon.purchaseLink);
    purchaseLink.textContent = `Buy ${pokemon.name} card`
            // Append to card-body div
    cardBody.appendChild(nameElement);
    cardBody.appendChild(heightWeight);
    cardBody.appendChild(move);
    cardBody.appendChild(ability);
    cardBody.appendChild(purchaseLink);

        // Append card-body div to card
    card.appendChild(cardBody);
    
    return card;
}
