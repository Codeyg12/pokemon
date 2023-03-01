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
    console.log(data)
    obj = {
      name: data.name,
      weight: data.weight,
      imageFront: data.sprites.front_default,
      imageBack: data.sprites.back_default,
      height: data.height,
      type: data.types[0]
    }

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

console.log(capitalize('rayquaza') )