import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [pokemon, setPokemon] = useState<[]>([]);

useEffect(() => {
  const fetchPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const data = await response.json()
    setPokemon(data.results)
  }
  fetchPokemon()
}, [])

console.log(pokemon);


  return (
    <>
      <h1 className="">
      Hello world!
    </h1>
    </>
  )
}

export default App
