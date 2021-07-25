import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { listPokemons } from './listPokemons';



const PokemonsList = () => {
  const { pokemons, capture } = useContext(PokemonContext);



  return (
    <div className="pokemons-list">
      <h2 className="pokemon-header" >Pokemons List</h2>

      <table className="table">
          <thead>
          <tr className="table-header">
          <th>Pokemon</th>
          <th>Add to Team</th>
          <th>view detials</th>
        </tr>
          </thead>
        {listPokemons({
          pokemons,
          onClick: capture,
          classNam: 'add-to-team-btn',
          buttonLabel: 'add to team',
          viewDetail: 'view details',
          viewDetailClassNam: 'details-btn'

        })}
      </table>
    </div>
  )
}

export default PokemonsList;
