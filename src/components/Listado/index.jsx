import styled from "styled-components"
import PropTypes from 'prop-types'

const ComponentContainer = styled.section`
  width: 365px;
  height: 650px;
  border: 1px solid red;
  border-radius: 10px;
  padding: 10px;
  overflow: auto;
`

const PokemonContainer = styled.section`
  display: flex;
  flex-wrap: wrap;  
  justify-content: flex-start;
  gap: 10px;
  align-content: flex-start;
  margin-top: 10px;
`

const Box = styled.div`
  color: red;
  border: 1px solid blue;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  &:hover {
    background-color: blue;
    color: white;
    cursor: pointer;
  };
`

export default function Listado({ pokemonListFiltered, seleccionarPokemon, filtrarPorNombre }) {
  return (
    <ComponentContainer>
      <input onChange={e => filtrarPorNombre(e)} type="text" placeholder="Buscar Pokemon" />
      <PokemonContainer>
        {pokemonListFiltered && pokemonListFiltered.map((pokemon) => (
          <Box key={pokemon.id} onClick={() => seleccionarPokemon(pokemon)}>
            {pokemon.name}
            <img src={pokemon.sprites.front_default} alt="" width={75} height={75} />
          </Box>
        ))}
      </PokemonContainer>
    </ComponentContainer>
  )
}

Listado.propTypes = {
  pokemonListFiltered: PropTypes.array,
  seleccionarPokemon: PropTypes.func,
  filtrarPorNombre: PropTypes.func
}