import { useEffect, useState } from 'react'
import Card from '../components/Card';
import { pokemonCount, usePokemon } from '../PokemonContext';
import { Link } from 'react-router';

const Home = () => {
  const [allPokemon, setAllPokemon] = useState<[]>([]);
  const [shiny, setShiny] = useState<boolean>(false);
  const { state } = usePokemon() || { state: [] };

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      const data = await response.json()
      setAllPokemon(data.results)
    }
    fetchPokemon()
  }, [])

  // TODO: Add a searchbar to filter through the Pokémon by name or dex number

  const count = pokemonCount(state)


  return (
      <div className='bg-gradient-to-br from-slate-500 to-white-500 min-h-screen'>
        <h1>Pokémon Cards</h1>
        <div className='flex justify-between gap-2 sticky top-2'>
          <button className='border rounded-md p-2 mx-2 hover:bg-slate-50' onClick={() => setShiny(!shiny)}>Make Shiny</button>
          <Link className='border rounded-md p-2 mx-2 hover:bg-slate-50' to={'/squad'}>See Team ({count})</Link>
        </div>
        <div className='pt-10 flex flex-wrap justify-center gap-1'>
          {allPokemon.map((pokemon: any, index) => (
            <Card key={index} pokemon={pokemon} shiny={shiny} />
          ))}
        </div>
      </div>
  )
}

export default Home
