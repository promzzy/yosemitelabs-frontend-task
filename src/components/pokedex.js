import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { listPokemons } from './listPokemons';

const Pokedex = () => {
  const { capturedPokemons, release } = useContext(PokemonContext);

  return (
    <div className="pokedex">
      <h2 className="team-header">MY TEAM</h2>

      <table className="team-table">
          <thead>
          <tr className="table-header">
          <th>Pokemon</th>
          <th>Remove</th>
        </tr>
          </thead>
        {listPokemons({
          pokemons: capturedPokemons,
          onClick: release,
          classNam: 'remove-from-team-btn',
          buttonLabel: 'remove'
        })}
      </table>
    </div>
  )
}

export default Pokedex;
