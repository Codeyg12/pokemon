async function searchForPokemon(e) {
  console.log(e)
  await fetch("https://pokeapi.co/api/v2/pokemon/6/")
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