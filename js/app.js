const container = document.querySelector('.container')
const hide = document.querySelector('.hide');
let num = 0;

document.getElementById('submit-button').addEventListener('click', function() {
    hide.style.visibility = 'hidden';
    const input = document.getElementById('input').value;
    fetchPokemon(input);
    
});


function fetchPokemon(input) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
    .then((res) => res.json())
    .then((pokemon) => {
        const pokemonInfo = {
        name: pokemon.name,
        number: pokemon.id,
        type: getType(pokemon),
        ability: pokemon.abilities[0].ability.name,
        height: pokemon.height,
        weight: pokemon.weight,
        move: pokemon.moves[0].move.name,
        images: getImages(pokemon)
        }
        console.log(pokemonInfo);
        const pokemonCard = makePokemonCard(pokemonInfo);
        container.appendChild(pokemonCard);
        makeResetButton()
    })
    .catch(error => {
        console.log(error);
    })
}

function makePokemonCard(pokemon) {
    const card = document.createElement('div')
    card.classList.add('card');
    card.style.width = '18rem';

    
    const image = document.createElement('img');
    image.classList.add('card-img-top');
    image.setAttribute('src', pokemon.images[0]);
    image.setAttribute('alt', `This is ${pokemon.name}`);
    card.appendChild(image);
    setInterval(function(){changeImage(image, pokemon);}, 500);

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const nameElement = document.createElement('h5');
    nameElement.classList.add('card-title');
    nameElement.textContent = `Name: ${pokemon.name}`;

    const numberElement = document.createElement('p');
    numberElement.classList.add('card-text');
    numberElement.textContent = `Number: ${pokemon.number}`;

    const typeElement = document.createElement('p');
    typeElement.classList.add('card-text');
    typeElement.textContent = `Type: ${pokemon.type}`;

    const ability = document.createElement('p');
    ability.classList.add('card-text');
    ability.textContent = `Ability: ${pokemon.ability}`;

    const heightWeight = document.createElement('p');
    heightWeight.classList.add('card-text');
    heightWeight.textContent = `Height: ${pokemon.height}, Weight: ${pokemon.weight}`;

    const move = document.createElement('p');
    move.classList.add('card-text');
    move.textContent = `Move: ${pokemon.move}`;

    cardBody.appendChild(nameElement);
    cardBody.appendChild(numberElement);
    cardBody.appendChild(typeElement);
    cardBody.appendChild(ability);
    cardBody.appendChild(heightWeight);
    cardBody.appendChild(move);
    
    card.appendChild(cardBody)
    card.classList.add('cardBorder')

    return card;
}

function getType(pokemon) {
    const types = pokemon['types'].map(x => x.type.name)
    return types;
}

function getImages(pokemon) {
    let images = [];
    for (let key in pokemon.sprites) {
        let element = pokemon.sprites[key];
        if (typeof element === 'string') {
            images.push(element)
        } else {
            continue;
        }
    }
    return images;
}

function changeImage(image, pokemon) {
    image.src = pokemon.images[num++]
    if (num === pokemon.images.length) {
        num = 0;
    }
}

function makeResetButton() {
    let resetButton = document.createElement('button');
    resetButton.classList.add('reset-button');
    resetButton.textContent = 'Reset';
    container.append(resetButton);

    document.querySelector(".reset-button").addEventListener('click', function() {
    hide.style.visibility = 'visible';
    document.querySelector('.form').reset();
    document.querySelector('.card').remove();
    resetButton.remove();
    });
}