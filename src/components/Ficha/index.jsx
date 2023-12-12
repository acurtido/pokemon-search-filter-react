import styled from "styled-components"
import PropTypes from 'prop-types'

const ComponentContainer = styled.section`
  width: 365px;
  height: 650px;
  border: 1px solid blue;
  border-radius: 10px;
`

const PokemonContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    height: 100%;
`

export default function Ficha({ pokemonSeleccionado }) {
    return (
        <ComponentContainer>
            {pokemonSeleccionado && <PokemonContainer>
                {pokemonSeleccionado.name}
                <img src={pokemonSeleccionado.sprites.other['official-artwork'].front_default} alt="" height={200}  width={200}  />
                <label> Height: {pokemonSeleccionado.height} </label>
                <label> Weight: {pokemonSeleccionado.weight} </label>
                <label> Type: {pokemonSeleccionado.types[0].type.name} </label>
            </PokemonContainer>}
        </ComponentContainer>
    )
}

Ficha.propTypes = {
    pokemonSeleccionado: PropTypes.object
}