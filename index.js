let idNum = document.querySelector('#id-num')
let search = document.querySelector('#pokemon-name')
let name = document.querySelector('.name')
let type = document.querySelector('.type')
let evos = document.querySelector('.evos')
let weakness = document.querySelector('.weakness')
let weight = document.querySelector('.weight')
let height = document.querySelector('.height')
let frontImage = document.querySelector('#pokemon-front')
let backImage = document.querySelector('#pokemon-back')
let heightSpan = document.querySelector('#height-span')
let weightSpan = document.querySelector('#weight-span')
let obj
let shiny = false

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
      height: data.height,
      type1: data.types[0].type.name,
      type2: data?.types[1]?.type.name,
      imageFront: data.sprites.front_default,
      imageBack: data.sprites.back_default,
      shinyFront: data.sprites.front_shiny,
      shinyBack: data.sprites.back_shiny
    }
    idNum.innerHTML = `#${obj.id}`
    name.innerHTML = capitalize(obj.name)
    type1.src = makeTypeEmblems(obj.type1)
    if (obj.type2) type2.src = makeTypeEmblems(obj.type2)
    else type2.src = ''
    weightSpan.innerHTML = `${obj.weight * .22} lbs`
    heightSpan.innerHTML = heightConversion(obj.height)
    frontImage.src = obj.imageFront
    if (obj.imageBack) {
      backImage.src = obj.imageBack
      backImage.classList.remove('hidden')
    }
    else {
      backImage.src = ''
      backImage.classList.add('hidden')
    }
  });
  
}

const searchBtn = document.querySelector('.btn')

searchBtn.addEventListener('click', searchForPokemon)

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
      return 'icons/Fire.png'
      break;
    case 'dark':
      return 'icons/Dark.png'
      break;
    case 'electric':
      return 'icons/Electric.png'
      break;
    case 'fairy':
      return 'icons/Fairy.png'
      break;
    case 'fighting':
      return 'icons/Fighting.png'
      break;
    case 'ground':
      return 'icons/Ground.png'
      break;
    case 'ice':
      return 'icons/Ice.png'
      break;
    case 'poison':
      return 'icons/Poison.png'
      break;
    case 'psychic':
      return 'icons/Psychic.png'
      break;
    case 'rock':
      return 'icons/Rock.png'
      break;
    case 'steel':
      return 'icons/Steel.png'
      break;
    case 'water':
      return 'icons/Water.png'
      break;
    case 'dragon':
      return 'icons/Dragon.png'
      break;
    case 'grass':
      return 'icons/Grass.png'
      break;
    case 'bug':
      return 'icons/Bug.png'
      break;
    case 'flying':
      return `icons/Flying.png`
      break;
    case 'ghost':
      return 'icons/Ghost.png'
      break;
    default:
      return 'icons/Normal.png'
      break;
  }
}

function heightConversion(n) {
  n = (n * .32).toFixed(2)
  let num = n.toString()
  num = num.split('.')
  let inch = Math.round((num[1] * 12) / 100)
  let newNum = `${num[0]}' ${inch}"`
  return newNum
}

btn.addEventListener('click', () => {
  shiny = !shiny
  if (shiny) {
    if (!obj.shinyFront) return 
      frontImage.src = obj.shinyFront
    if (obj.shinyBack) {
      backImage.src = obj.shinyBack
      backImage.classList.remove('hidden')
    }
    else {
      backImage.src = ''
      backImage.classList.add('hidden')
    }
  } else {
    frontImage.src = obj.imageFront
    if (obj.imageBack) {
      backImage.src = obj.imageBack
      backImage.classList.remove('hidden')
    }
    else {
      backImage.src = ''
      backImage.classList.add('hidden')
    }
  }
})