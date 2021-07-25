import React, { createContext, useState } from 'react';
import { usePokemonReducer } from '../Redox/usePokemonReducer';
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS } from '../Redox/actions';

const PokemonContext = createContext();

const PokemonProvider = (props) => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const [state, dispatch] = usePokemonReducer();
  const { pokemons, capturedPokemons } = state;
  const [individualPokemon, setIndividulPokemon] = useState({})
  const [ input, setInput] = useState({name: ""})

  const capture = (pokemon) => () => dispatch({ type: CAPTURE, pokemon });
  const release = (pokemon) => () => dispatch({ type: RELEASE, pokemon });
  const addPokemon = (pokemon) => dispatch({ type: ADD_POKEMON, pokemon });
  const addPokemons = (pokemons) => dispatch({ type: ADD_POKEMONS, pokemons });
  


    const fetchAllPokemons = async (e) => {
      e.preventDefault()
      const response = await fetch(url);
      const data = await response.json();
      addPokemons(data.results);
    };


  const searchPokemon = async (e) => {
    e.preventDefault()
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.name}`);
    const data = await response.json();
    setIndividulPokemon(data);
  };
  const pokemonDetails = async ( pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
    const data = await response.json();
    setIndividulPokemon(data);
  };

  const providerValue = {

    searchPokemon,
    setInput,
    input,
    pokemonDetails,
    fetchAllPokemons,
    pokemons,
    capturedPokemons,
    capture,
    release,
    addPokemon,
    addPokemons,
    individualPokemon
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  )
};

export { PokemonContext, PokemonProvider };
