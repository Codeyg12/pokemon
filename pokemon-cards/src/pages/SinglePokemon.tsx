import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Pokemon } from "../types/Pokemon";

const SinglePokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const data = await response.json();
      setPokemon(data);
    };
    fetchPokemon();
  });

  return (
    <>
      <h1>SinglePokemon</h1>
      <p>{pokemon?.name}</p>
    </>
  );
};

export default SinglePokemon;
