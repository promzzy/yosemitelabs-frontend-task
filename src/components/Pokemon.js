import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

export const Pokemon = ({ pokemon, onClick, buttonLabel, viewDetail, classNam, viewDetailClassNam }) => {
  const { pokemonDetails } = useContext(PokemonContext);

  return(
    <tbody>
      <tr key={pokemon.name} className="table-data">
    <td className="pokemon-names"><span>{pokemon.name}</span></td>
    <td><button onClick={onClick(pokemon)} className={`${classNam}`}>{buttonLabel}</button></td>
    <td><button className={`${viewDetailClassNam}`} onClick={(e)=>{ pokemonDetails(pokemon)}}>{viewDetail}</button></td>
     </tr>
    </tbody>
)};

export default Pokemon;
