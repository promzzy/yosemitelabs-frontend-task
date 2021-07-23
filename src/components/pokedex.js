import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { listPokemons } from './listPokemons';

const Pokedex = () => {
  const { capturedPokemons, release } = useContext(PokemonContext);

  return (
    <div className="pokedex">
      <h2>TEAM</h2>

      <table>
        <tr>
          <th>Pokemon</th>
          <th>Remove</th>
        </tr>
        {listPokemons({
          pokemons: capturedPokemons,
          onClick: release,
          buttonLabel: '-'
        })}
      </table>
    </div>
  )
}

export default Pokedex;
