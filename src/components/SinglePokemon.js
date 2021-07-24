import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'

function SinglePokemon(){
    const { individualPokemon } = useContext(PokemonContext);

        console.log(individualPokemon)


    return(
        <>
        hello
        </>
    )
}

export default SinglePokemon;