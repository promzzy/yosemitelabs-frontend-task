import React from 'react'
import PokemonsList from '../PokamonsList'
import SearchInput from '../SearchPokemonInput'
import SinglePokemon from '../SinglePokemon'

function Pokemons(){
    return(
        <>
            <div className="pokemons-containner">
            <SearchInput />
            <div className="pokemons-body" >
            <PokemonsList />
             <SinglePokemon />
             </div>
            </div>
        </>
    )
}
export default Pokemons;