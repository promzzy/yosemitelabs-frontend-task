import React from 'react';
import Pokemon from './Pokemon';

export const listPokemons = ({ pokemons, onClick, buttonLabel, viewDetail, classNam, viewDetailClassNam }) =>
pokemons && pokemons.map((pokemon, index) => (
    <Pokemon key={index}
      pokemon={pokemon}
      onClick={onClick}
      buttonLabel={buttonLabel}
      viewDetail={viewDetail}
      index={index}
      classNam={classNam}
      viewDetailClassNam={viewDetailClassNam}
    />
  ));
