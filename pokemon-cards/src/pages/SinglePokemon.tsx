import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Pokemon } from "../types/Pokemon";
import Card from "../components/Card";

const SinglePokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  
  // useEffect(() => {
  //   const fetchPokemon = async () => {
  //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  //     const data = await response.json();
  //     setPokemon(data);
  //   };
  //   fetchPokemon();
  // }, []);
  

  return (
    <>
      {/* {pokemon && <Card pokemon={pokemon} shiny={false} />} */}
      <h1>Single Pokemon {id}</h1>
    </>
  );
};

export default SinglePokemon;
