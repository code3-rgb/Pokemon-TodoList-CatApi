import axios from 'axios'
import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { ThreeHorseLoading } from 'react-loadingg'

import { BoxLoading } from 'react-loadingg'
import './searchPokemon.css'



export const SearchState = () => {
    



    const Pokemon = axios.create({
      baseURL: 'https://pokeapi.co/api/v2/pokemon'
    })

    // const query = useQueryClient()

    const [pokemon,setPokemon] = useState('pikachu')

    const getPokemon = async ()=>{
      if(pokemon === '')  return
      const {data} = await Pokemon.get(`/${pokemon}`)
      return data
    }
    const { isLoading, isFetching,refetch, error, data:data, status } = useQuery('pokemon',getPokemon);


    if(error) {
      if(error.response.status)
      return <div className='error'>

        <div className='error-box'>
          <h1>{error.response.status}!</h1>
          <h1>Pokemon cannot be found!</h1>
        </div>

      </div>
    }
    if(isFetching) {
      return <ThreeHorseLoading />
    }

    const SetPokemon = ()=>{

      return  isLoading ? <BoxLoading /> : <div className='pokemon-box'>

        <img src={data.sprites.front_shiny}/>

        <div className='about-pokemon'>
          <span>Species:</span>
          <p>{data.species.name}</p>
          <span>Ability:</span>
          {
            data.abilities.map(val=>(
              <p>{val.ability.name}</p>
            ))
          }
          <span>Types:</span>
          <p>{data.types[0].type.name}</p>
          <span>Weigth:</span>
          <p>Weigth:{data.weight}</p>
          <span>Height:</span>
          <p>{data.height}</p>

        </div>

      </div>


    }


    return (

    <div className='pokemon-search-box'>


        <div className='pokemon-card'>
        <div className='search-pokemon'>
          <input onChange={(e)=>setPokemon(e.target.value.toLowerCase())} />
          <button onClick={()=> refetch()}>Submit</button>
        </div>


        {
          SetPokemon()
        }
        </div>


    </div>
  )
}
