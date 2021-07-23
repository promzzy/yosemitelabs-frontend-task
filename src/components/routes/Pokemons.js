import React from 'react'
import PokemonsList from '../PokamonsList'
import SinglePokemon from '../SinglePokemon'

function Pokemons(){
    return(
        <>
            <div className="pokemons-containner">
            <PokemonsList />
             <SinglePokemon />
            </div>
        </>
    )
}
export default Pokemons;