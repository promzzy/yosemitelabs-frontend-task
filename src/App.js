import React from 'react'
import { PokemonProvider } from './context/PokemonContext';
import { ChakraProvider } from "@chakra-ui/react"
import PokemonsList from './components/PokamonsList';
function App() {
  return (
    <ChakraProvider>
        <PokemonProvider>
    <div>
      <PokemonsList />
      {/* <Pokedex /> */}
    </div>
    {/* <div className='form-wrapper'>
      <PokemonForm />
    </div> */}
  </PokemonProvider>
    </ChakraProvider>
  );
}

export default App;
