import Ficha from './components/Ficha'
import Listado from './components/Listado'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

const ComponentContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
`

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonListFiltered, setPokemonListFiltered] = useState([])
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null)

  const obtenerPokemonList = async (cantidad) => {
    for (let index = 1; index <= cantidad; index++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
      const data = await response.json()
      setPokemonList((prev) => [...prev, data])
    }
  }

  const seleccionarPokemon = (pokemon) => {
    setPokemonSeleccionado(pokemon)
  }

  useEffect(() => {
    obtenerPokemonList(151)
  }, [])

  useEffect(() => {
    setPokemonListFiltered(pokemonList)
  }, [pokemonList])

  const filtrarPorNombre = (event) => {
    const value = event.target.value
    const pokemonListFiltered = pokemonList.filter((pokemon) => pokemon.name.includes(value))
    setPokemonListFiltered(pokemonListFiltered)
  }

  return (
    <ComponentContainer>
      <Listado pokemonListFiltered={pokemonListFiltered} filtrarPorNombre={filtrarPorNombre} seleccionarPokemon={seleccionarPokemon} />
      <Ficha pokemonSeleccionado={pokemonSeleccionado} />
    </ComponentContainer>
  )
}

export default App
