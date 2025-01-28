import { useEffect, useState } from 'react'
import Card from './components/Card';
import { pokemonCount, usePokemon } from './PokemonContext';

function App() {
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

  // console.log(pokemon);

  const count = pokemonCount(state)


  return (
      <div className='bg-gradient-to-br from-slate-500 to-white-500 min-h-screen'>
        <h1>Pokémon Cards</h1>
        <div className='flex justify-between gap-2 sticky top-2'>
          <button className='border rounded-md p-2 mx-2 hover:bg-slate-50' onClick={() => setShiny(!shiny)}>Make Shiny</button>
          <button className='border rounded-md p-2 mx-2 hover:bg-slate-50'>See Team ({count})</button>
        </div>
        <div className='pt-10 flex flex-wrap justify-center gap-1'>
          {allPokemon.map((pokemon: any, index) => (
            <Card key={index} pokemon={pokemon} shiny={shiny} />
          ))}
        </div>
      </div>
  )
}

export default App
