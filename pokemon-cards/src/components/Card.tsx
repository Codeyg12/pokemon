import { useEffect, useState } from "react";
import pokemonCard from "../../../icons/pokemon-card.png";
import { generateRandomGradients, getTypeAndBackground } from "../utils.ts";
import { Pokemon } from "../types/Pokemon.ts";
import StatsBanner from "./StatsBanner.tsx";

interface CardProps {
  pokemon: Pokemon;
  shiny: boolean;
}

const Card = ({ pokemon, shiny }: CardProps) => {
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);
  const [flipped, setFlipped] = useState<boolean>(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      setPokemonData(data);
    };
    fetchPokemon();
  }, []);

  // console.log("POKEMONDATA: ", pokemonData);
  // console.log("POKEMONDATA: ", pokemonData?.types[0]?.type.name);

  // const flipCard = (e: React.MouseEvent<HTMLDivElement>) => {
  //   (e.currentTarget as HTMLDivElement).style.transform = "rotate(180deg)";
  // }

  // https://codepen.io/desandro/pen/LmWoWe

  // const backgroundStyle = pokemonData ? getBackgroundStyle(pokemonData.types[0].type.name) : "bg-gray-300";

  // return (
  //   <>
  //     {pokemonData && (
  //       <div className="container border w-[30%] h-[40rem] rounded-lg bg-yellow-300 flex justify-center items-center" onClick={(e) => flipCard(e)}>

  const backgroundStyle = pokemonData
    ? getTypeAndBackground(pokemonData.types[0].type.name).background
    : "bg-gray-300";

  return (
    <>
      {pokemonData && (
        <>
          <div className="container border w-[30%] h-[40rem] rounded-lg bg-yellow-300 flex justify-center items-center">
            <div
              style={{ background: generateRandomGradients() }}
              className={`container border w-[90%] h-[90%] text-center ${backgroundStyle} bg-opacity-85`}
            >
              <header className="flex justify-between items-center px-2 h-20">
                <h2 className="text-2xl font-bold">
                  {pokemonData.name.charAt(0).toUpperCase() +
                    pokemonData.name.substring(1)}
                </h2>
                <div className="flex items-center mt-2">
                  <p className="mr-2">{pokemonData.stats[0].base_stat} HP</p>
                  <div className="flex flex-col gap-y-1">
                    {pokemonData.types.map((typeObj, index) => (
                      <span key={index}>
                        <img
                          src={getTypeAndBackground(typeObj.type.name).emblem}
                          alt={typeObj.type.name}
                        />
                      </span>
                    ))}
                  </div>
                </div>
              </header>
              <div
                className={`border w-4/5 h-1/2 mx-auto mt-2 shadow-lg ${backgroundStyle} `}
              >
                <button onClick={() => setFlipped(!flipped)}>Flip</button>
                <img
                  className={"mx-auto h-full"}
                  src={
                    flipped
                      ? shiny
                        ? pokemonData.sprites.back_shiny
                        : pokemonData.sprites.back_default
                      : shiny
                      ? pokemonData.sprites.front_shiny
                      : pokemonData.sprites.front_default
                  }
                  alt={pokemonData.name}
                />
              </div>
              <StatsBanner pokemonData={pokemonData} />
              <div>
                <h3>Moves:</h3>
                <ul>
                  {pokemonData.moves.slice(0, 2).map((moveObj, index) => (
                    <li key={index}>{moveObj.move.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="container w-[500px] h-[500px] rounded-lg bg-yellow-300 flex justify-center items-center">
          <img src={pokemonCard} />
        </div> */}
        </>
      )}
    </>
  );
};

export default Card;
