fetch("https://pokeapi.co/api/v2/pokemon/charmander/")
  .then((response) => response.json())
  .then((data) => console.log(data.sprites.back_default));

//   console.log(85 * .22) //! WEIGHT CONVERSION

// console.log(6 * .32) //! Height Conversion
