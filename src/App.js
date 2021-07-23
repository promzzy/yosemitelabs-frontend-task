import React from 'react'
import { PokemonProvider } from './context/PokemonContext';
import { ChakraProvider } from "@chakra-ui/react"
import Pokedex from './components/pokedex';
import Pokemons from './components/routes/Pokemons';
function App() {
  return (
    <ChakraProvider>
        <PokemonProvider>
    <div className="main">
      <Pokemons />
      <Pokedex />
    </div>
    {/* <div className='form-wrapper'>
      <PokemonForm />
    </div> */}
  </PokemonProvider>
    </ChakraProvider>
  );
}

export default App;
