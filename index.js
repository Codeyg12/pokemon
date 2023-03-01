let search = document.querySelector('#pokemon-name')
let name = document.querySelector('.name')
let type = document.querySelector('.type')
let evos = document.querySelector('.evos')
let weakness = document.querySelector('.weakness')
let weight = document.querySelector('.weight')
let height = document.querySelector('.height')
let frontImage = document.querySelector('#pokemon-front')
let backImage = document.querySelector('#pokemon-back')
let obj

async function searchForPokemon(e) {
  let value = search.value
  e.preventDefault()
  await fetch(`https://pokeapi.co/api/v2/pokemon/${value}/`)
  .then((response) => response.json())
  .then((data) => {
    obj = {
      id: data.id,
      name: data.name,
      weight: data.weight,
      imageFront: data.sprites.front_default,
      imageBack: data.sprites.back_default,
      height: data.height,
      type1: data.types[0].type.name,
      type2: data?.types[1]?.type.name
    }
    name.innerHTML = capitalize(obj.name)
    type1.src = makeTypeEmblems(obj.type1)
    type2.src = makeTypeEmblems(obj.type2)
    console.log(obj)
  });
  
}

const searchBtn = document.querySelector('.btn')

searchBtn.addEventListener('click', searchForPokemon)

//   console.log(85 * .22) //! WEIGHT CONVERSION

// console.log(6 * .32) //! Height Conversion

//? description about it

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1, name.length)
}

// function searchForEvos(id) {
//   fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
//   .then(res => res.json())
//   .then(data => console.log(data))
// }

function makeTypeEmblems(type) {
  switch (type) {
    case 'fire':
      return `icons/105px-FireIC.png`
      break;
    case 'dark':
      break;
    case 'electric':
      break;
    case 'fairy':
      break;
    case 'fighting':
      break;
    case 'ground':
      break;
    case 'ice':
      break;
    case 'poison':
      break;
    case 'psychic':
      break;
    case 'rock':
      break;
    case 'steel':
      break;
    case 'water':
      break;
    case 'dragon':
      break;
    case 'grass':
      break;
    case 'bug':
      break;
    case 'flying':
      return `icons/105px-FlyingIC.png`
      break;
    case 'ghost':
      break;
    default:
      break;
  }
}