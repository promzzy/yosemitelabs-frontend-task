import React, { useContext, useEffect } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { listPokemons } from './listPokemons';
import SearchInput from './SearchPokemonInput';

const url = "https://pokeapi.co/api/v2/pokemon";

const PokemonsList = () => {
  const { pokemons, capture, addPokemons } = useContext(PokemonContext);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url);
      const data = await response.json();
      addPokemons(data.results);
      console.log(data)
    };

    fetchPokemons();
  }, []);

  return (
    <div className="pokemons-list">
      <SearchInput />
      <h2>Pokemons List</h2>

      <table>
        <tr>
          <th>Pokemon</th>
          <th>Add to Team</th>
          <th>view detials</th>
        </tr>
        {listPokemons({
          pokemons,
          onClick: capture,
          buttonLabel: '+',
          viewDetail: 'view details'
        })}
      </table>
    </div>
  )
}

export default PokemonsList;
