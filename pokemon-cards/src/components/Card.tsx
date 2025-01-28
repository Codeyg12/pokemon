import { useEffect, useState } from "react";
import fire from "../../../icons/Fire.png";
import dark from "../../../icons/Dark.png";
import electric from "../../../icons/Electric.png";
import fairy from "../../../icons/Fairy.png";
import fighting from "../../../icons/Fighting.png";
import ground from "../../../icons/Ground.png";
import ice from "../../../icons/Ice.png";
import poison from "../../../icons/Poison.png";
import psychic from "../../../icons/Psychic.png";
import rock from "../../../icons/Rock.png";
import steel from "../../../icons/Steel.png";
import water from "../../../icons/Water.png";
import dragon from "../../../icons/Dragon.png";
import grass from "../../../icons/Grass.png";
import bug from "../../../icons/Bug.png";
import flying from "../../../icons/Flying.png";
import ghost from "../../../icons/Ghost.png";
import normal from "../../../icons/Normal.png";

interface Pokemon {
  id: number;
  name: string;
  url: string;
  weight: number;
  height: number;
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  sprites: {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
  };
}

interface CardProps {
  pokemon: Pokemon;
  shiny: boolean;
}

const makeTypeEmblems = (type: string) => {
  switch (type) {
    case "fire":
      return fire;
    case "dark":
      return dark;
    case "electric":
      return electric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "poison":
      return poison;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
    case "dragon":
      return dragon;
    case "grass":
      return grass;
    case "bug":
      return bug;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    default:
      return normal;
  }
};

const getBackgroundStyle = (type: string) => {
    switch (type) {
        case "fire":
            return "bg-red-500";
        case "water":
            return "bg-blue-500";
        case "grass":
            return "bg-green-500";
        case "electric":
            return "bg-yellow-500";
        case "ice":
            return "bg-blue-200";
        case "fighting":
            return "bg-red-700";
        case "poison":
            return "bg-purple-500";
        case "ground":
            return "bg-yellow-700";
        case "flying":
            return "bg-blue-300";
        case "psychic":
            return "bg-pink-500";
        case "bug":
            return "bg-green-700";
        case "rock":
            return "bg-gray-700";
        case "ghost":
            return "bg-purple-700";
        case "dragon":
            return "bg-indigo-500";
        case "dark":
            return "bg-gray-900";
        case "steel":
            return "bg-gray-500";
        case "fairy":
            return "bg-pink-300";
        default:
            return "bg-gray-300";
    }
};

const generateRandomGradients = () =>  {
  const gradients = [];
  for (let i = 0; i < 100; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const color = i % 2 === 0 ? 'rgba(211,211,211,1)' : 'rgba(50,205,50,1)';
      gradients.push(`radial-gradient(circle at ${x}% ${y}%, ${color} 0%, ${color.replace('1)', '0)')} 20%)`);
  }
  return gradients.join(', ');
}

const padWithZeroes = (num: number) => {
  return num.toString().padStart(3, "0");
};

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


  const backgroundStyle = pokemonData ? getBackgroundStyle(pokemonData.types[0].type.name) : "bg-gray-300";

  return (
    <>
      {pokemonData && (
        <div className="container border w-[30%] h-[40rem] rounded-lg bg-yellow-300 flex justify-center items-center">
          <div style={{ background: generateRandomGradients()}} className={`container border w-[90%] h-[90%] text-center ${backgroundStyle} bg-opacity-85 rounded-lg`}>
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
                        src={makeTypeEmblems(typeObj.type.name)}
                        alt={typeObj.type.name}
                      />
                    </span>
                  ))}
                </div>
              </div>
            </header>
            <div className={`border w-4/5 h-1/2 mx-auto mt-2 shadow-lg ${backgroundStyle} `}>
            <button onClick={() => setFlipped(!flipped)}>Flip</button>
              <img
                className={"mx-auto h-full"}
                src={
                    flipped
                        ? (shiny ? pokemonData.sprites.back_shiny : pokemonData.sprites.back_default)
                        : (shiny ? pokemonData.sprites.front_shiny : pokemonData.sprites.front_default)
                }
                                alt={pokemonData.name}
              />
            </div>
            <StatsBanner pokemonData={pokemonData} />
          </div>
        </div>
      )}
    </>
  );
};

const StatsBanner = ({ pokemonData }: { pokemonData: Pokemon }) => {
  const heightConversion = (height: number) => {
    const heightInFeet = height * 0.328084;
    const feet = Math.floor(heightInFeet);
    const inches = Math.round((heightInFeet - feet) * 12);
    return `${feet}' ${inches}"`;
  };

  return (
    <>
      <div className="flex justify-around mx-14 p-1 border items-center mt-2 bg-orange-300 drop-shadow-md">
        <p>NO. {padWithZeroes(pokemonData.id)}</p>
        <p>HT: {heightConversion(pokemonData.height)}</p>
        <p>WT: {pokemonData.weight * 0.22} lbs</p>
      </div>
    </>
  );
};

export default Card;
