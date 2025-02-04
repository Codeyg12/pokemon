import { useEffect, useState } from "react";
import pokemonCard from "../../../assets/pokemon-card.png";
import {
  generateRandomGradients,
  getTypeAndBackground,
  multipleOfFive,
} from "../utils.ts";
import { Pokemon } from "../types/Pokemon.ts";
import StatsBanner from "./StatsBanner.tsx";
import { usePokemon } from "../PokemonContext.tsx";
import { Link } from "react-router";

// TODO 1: Make background and stats permanent after initial render
// TODO 2: Add a flip animation to the back of the card
// TODO 3: Disable button of Pokemon is already in team


interface CardProps {
  pokemon: Pokemon;
  shiny: boolean;
}

const Card = ({ pokemon, shiny }: CardProps) => {
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);
  const [flipped, setFlipped] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);
  const [background, setBackground] = useState<string>("bg-gray-300");
  const [color, setColor] = useState<string>("rgba(169, 169, 169, 1)");
  const [onTeam, setOnTeam] = useState<boolean>(false);

  const { state, dispatch } = usePokemon() || {};

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      setPokemonData(data);
    };
    fetchPokemon();
  }, []);


  useEffect(() => {
    if (pokemonData) {
      const { background: bgData, color: colorData } = getTypeAndBackground(pokemonData.types[0].type.name);
      setBackground(bgData);
      setColor(generateRandomGradients(colorData));
    }
  }, [pokemonData]);


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

  const handleAddToTeam = () => {
    setSelected(!selected);
    if (dispatch && pokemonData) {
      if (state.some((p) => p.id === pokemonData.id) || state.length >= 6) {
        return;
      }
      dispatch({
        type: "ADD_POKEMON",
        payload: {
          name: pokemonData.name,
          id: pokemonData.id,
        },
      });
      setOnTeam(true);
      console.log(state);
    }
  };

  const handleRemoveFromTeam = () => {
    if (dispatch && pokemonData) {
      dispatch({
        type: "REMOVE_POKEMON",
        payload: {
          name: pokemonData.name,
          id: pokemonData.id,
        },
      })
      setOnTeam(false);
    }
  }


  return (
    <>
      {pokemonData && (
        <>
          <div className="container border-[20px] border-yellow-300 w-[30%] h-[40rem] rounded-lg flex justify-center items-center">
            <div
              style={{ background: color }}
              className={`container border w-full h-full text-center bg-opacity-85`}
            >
              <Link to={`/${pokemonData.id}`}>
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
              </Link>
              <div
                className={`border w-4/5 h-1/2 mx-auto mt-2 shadow-lg ${background} `}
              >
                <button onClick={() => setFlipped(!flipped)}>Flip</button>
                <img
                  className={"mx-auto h-full " + (selected && "dancing")}
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
                <h3 className="mt-2 font-extrabold">MOVES: </h3>
              <div className="grid grid-cols-2 gap-2 font-semibold uppercase mx-10">
                {pokemonData.moves.slice(0, 2).map((moveObj, index) => (
                  <>
                    <p className="justify-self-start" key={index}>{moveObj.move.name}</p>
                    <p className="justify-self-end">{multipleOfFive()}</p>
                  </>
                ))}
              </div>
              <button className="relative bottom-[-20px] outline px-4 py-2 rounded-lg hover:outline-white hover:text-white cursor-pointer" onClick={onTeam ? handleRemoveFromTeam : handleAddToTeam}>{onTeam ? "Remove from" : "Add to"} Team</button>
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
