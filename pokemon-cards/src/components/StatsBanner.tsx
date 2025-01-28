import { Pokemon } from "../types/Pokemon";
import { heightConversion, padWithZeroes } from "../utils";

const StatsBanner = ({ pokemonData }: { pokemonData: Pokemon }) => {
  return (
    <div className="flex justify-around mx-14 p-1 border items-center mt-2 bg-orange-300 drop-shadow-md">
      <p>NO. {padWithZeroes(pokemonData.id)}</p>
      <p>HT: {heightConversion(pokemonData.height)}</p>
      <p>WT: {pokemonData.weight * 0.22} lbs</p>
    </div>
  );
};

export default StatsBanner;
