import React from 'react';
import Pokemon from './Pokemon';

export const listPokemons = ({ pokemons, onClick, buttonLabel, viewDetail }) =>
  pokemons.map((pokemon) => (
    <Pokemon
      pokemon={pokemon}
      onClick={onClick}
      buttonLabel={buttonLabel}
      viewDetail={viewDetail}
    />
  ));
