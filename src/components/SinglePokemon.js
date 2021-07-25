import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'

function SinglePokemon(){
    const { individualPokemon } = useContext(PokemonContext);

        console.log(individualPokemon)


    return(
        <>

        <div className="pokemon-detals-containner">
            <h2 className="detail-header">POKEMON DETAILS</h2>
            <table className="pokemon-details-table">
                <thead>
                    <tr>
                        <th>.....</th>
                        <th>.....</th>
                    </tr>
                </thead>
                <tbody className="polemon-detail-table-body">
                    <tr>
                        <td className="pokemon-detail-value">{individualPokemon.name}</td>
                        <td className="pokemon-detail-key">:name</td>
                    </tr>

                    <tr>
                        <td className="pokemon-detail-value">{individualPokemon.height}</td>
                        <td className="pokemon-detail-key">:height(M)</td>
                    </tr>

                    <tr>
                        <td className="pokemon-detail-value">{individualPokemon.weight}</td>
                        <td className="pokemon-detail-key">:weight(KG)</td>
                    </tr>

                    <tr>
                        <td>...</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default SinglePokemon;