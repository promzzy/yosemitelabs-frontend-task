import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'

function SearchInput(){
    const { fetchAllPokemons,input, setInput, searchPokemon } = useContext(PokemonContext);
    return(
        <>
        <div className="search-section">
            <button className="view-all-btn" onClick={(e)=>(fetchAllPokemons(e))}>view all pokemon</button>
        <form className="search-form">
            <input type="name" placeholder="enter a pokemon name" value={input.name} onChange={(e)=>{setInput({...input, name: e.target.value})}} />
            <button className="search-btn" onClick={(e)=>(searchPokemon(e))}>
                search
            </button>
        </form>
        </div>
        </>
    )
}
export default SearchInput;