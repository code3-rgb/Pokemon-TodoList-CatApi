import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { BoxLoading } from 'react-loadingg'
import { PokemonContext } from '../Context/PokemonContext'
import { reducer } from '../Reducers/PokemonReducer'
import { ERROR, FETCH } from './PokemonActions'
import { PokemonDisplay } from './PokemonDisplay'
import './PokemonStyle.css'


const initialState = {
  Pokemons: [],
  Loading: true,
  Error: null,
}


export const Pokemon = () => {
    const [presentLink,setPresentLink] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    const [previousLink,setPreviousLink] = useState('')
    const [state,dispatch] = useReducer(reducer,initialState)

    const FetchPokemons = async (type)=>{
      try {
        // fetch teh pokemon data

        let Link
        let Poke_data 
        if(previousLink === null && type === 'prev') return


        if(type === 'next'){
          Link = presentLink
          Poke_data = (await axios(Link)).data
          setPresentLink(Poke_data.next)
          setPreviousLink(Poke_data.previous)
          
        }
        else if(type === 'prev')  {
          Link = previousLink
          Poke_data = (await axios(Link)).data
          setPresentLink(Poke_data.next)
          setPreviousLink(Poke_data.previous)

        } else {
          Link = presentLink
          Poke_data = (await axios(Link)).data
          setPresentLink(Poke_data.next)
          setPreviousLink(Poke_data.previous)
        }


        // store the results which contain all info
        const results = Poke_data.results
        
        // set the names of pokemon
        const names = results.map(value=>(value.name))

        // fetch the data of all pokemon
        const PokeData = await axios.all(results.map(value=>axios(value.url)))
        const PokemonData = PokeData.map(value=> value.data)
       // fetch the image link of all pokemon
        const image_link = PokemonData.map(value=>(
          value.sprites.front_shiny
        ))


        // Pokemon abilities
        const pokeAbility = PokemonData.map(value=>(
          value.abilities
        ))
        const abilities = []
        pokeAbility.forEach(values=>{
          const ability = []
          values.map(val=>{
            ability.push(val.ability.name)
          })
          abilities.push(ability)
        })

        // Pokemon weight,id,baseExp
        const weight = PokemonData.map(value=>(
          value.weight
        ))
        const height = PokemonData.map(value=>(
          value.height
        ))
        const Id = PokemonData.map(value=>(
          value.id
        ))
        const base_exp = PokemonData.map(value=>(value.base_experience))

        // merge pokemon and it's image link
        const Pokemons = []
        names.forEach((value,i)=>{
          Pokemons.push({id: Id[i],name: value, image: image_link[i], weight: weight[i],height: height[i], ability: abilities[i],base_experience: base_exp[i] })
        })
        
        // console.log(Pokemons)

        dispatch({ type: FETCH,payload: Pokemons })

      } catch (error) {
        dispatch({ type:ERROR,payload: error.message })
      }

    }

    useEffect(()=>{
      FetchPokemons('')
    },[])


    if(state.Error) {
      return <h1>An Error has Occured!</h1>
    }

  return (
    <PokemonContext.Provider value={{state,dispatch}}>

      { state.Loading ? <BoxLoading /> :
          <div className='Pokemon-Container'>
          <div className='header'>
              <h1 className='h1'>Pokemon</h1>
              <div className='navigation'>
                <button onClick={()=> FetchPokemons('prev')}>Prev</button>
                <button onClick={()=> FetchPokemons('next')}>Next</button>
            </div>
            </div>
            
            
            <PokemonDisplay />
    
            <div className='footer'>
              <h2 className='h2'>
                Pokemon; Gotta Catch em all.
              </h2>
            </div>
          </div>
      }
    

    </PokemonContext.Provider>
  )
}
