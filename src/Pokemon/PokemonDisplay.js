import { useContext } from 'react'
import { BoxLoading } from 'react-loadingg'
import React, { useEffect, useState } from 'react'
import { PokemonContext } from '../Context/PokemonContext'
import './PokemonStyle.css'


export const PokemonDisplay = () => {

    const { state,dispatch } = useContext(PokemonContext)



    const Display = ()=>{
        if(state.Error !== null) {
            return (
                <div>
                    <p>{ state.Error }! An error Occured.</p>
                </div>
            )
        }
        if(state.Loading) {
            return (
                <div>
                    <p>Pokemon! Gotta Catch them All</p>
                </div>
            )
        }

        

        return state.Pokemons.map(value=>(


                <div className='individual-pokemon' key={value.id}>
                   
                    <img src={value.image} />
                    <div className='description' id={value.id}>
                        <div>
                            <p><span>Species: </span><br/>{value.name}</p>
                            <p><span>Base Exp: </span><br/>{ value.base_experience }</p>
            
                            <p><span>Weight: </span><br/> { value.weight}</p>
                            <p><span>Height: </span><br/> { value.height}</p>
                        </div>
                        <div className='pokemon-abilities'>
                        <ul>
                            <span>Abilities:</span>
                        {    value.ability.map(val=><li>{ val }</li>)   }
                        </ul>
                        </div>

                    </div>

                </div>

        ))
    }


  return (
    <div className='Pokemons' >
        { Display() }
    </div>
  )
}
