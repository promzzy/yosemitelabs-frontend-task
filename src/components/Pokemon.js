import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

export const Pokemon = ({ pokemon, onClick, buttonLabel, viewDetail, classNam, viewDetailClassNam }) => {
  console.log(pokemon)
  // const { pokemonDetails } = useContext(PokemonContext);

  return(
  <tr key={pokemon.name} className="table-data">
    <td><span>{pokemon.name}</span></td>
    <td><button onClick={onClick(pokemon)} className={`${classNam}`}>{buttonLabel}</button></td>
    {/* <td><button className={`${viewDetailClassNam}`} onClick={(e)=>(pokemonDetails(e))}>{viewDetail}</button></td> */}
  </tr>
)};

export default Pokemon;
