fetch("https://pokeapi.co/api/v2/pokemon/charmander/")
  .then((response) => response.json())
  .then((data) => {
    let obj = {
      name: data.name,
      weight: data.weight,
      imageFront: data.sprites.front_default,
      imageBack: data.sprites.back_default,
      height: data.height,
      type: data.types[0].type.name
    }

    console.log(obj)
  });

//   console.log(85 * .22) //! WEIGHT CONVERSION

// console.log(6 * .32) //! Height Conversion

//? description about it