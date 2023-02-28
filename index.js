let search = document.querySelector('#pokemon-name')


async function searchForPokemon(e) {
  let value = search.value
  console.log("🚀 ~ file: index.js:6 ~ searchForPokemon ~ value:", value)
  e.preventDefault()
  await fetch(`https://pokeapi.co/api/v2/pokemon/${value}/`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    let obj = {
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