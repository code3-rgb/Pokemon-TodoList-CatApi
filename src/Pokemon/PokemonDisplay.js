import { useContext } from 'react'
import { BoxLoading } from 'react-loadingg'
import React, { useEffect, useState } from 'react'
import { PokemonContext } from '../Context/PokemonContext'



export const PokemonDisplay = () => {

    const { state,dispatch } = useContext(PokemonContext)
    const [scroll,setScroll] = useState(400)



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

        
        const Scroll = (dir,id)=>{
            const description = document.getElementById(id)
            description.scrollTo(dir,0)
        }

        return state.Pokemons.map(value=>(

            <>
            
            {
            state.Loading ? <BoxLoading /> :
            <div className='pokemon' key={value.id}>
                <img src={value.image} />
                <div className='desc-buttons'>
                    <button onClick={(e)=> Scroll(0,value.id)}>Name</button>
                    <button onClick={(e)=> Scroll(300,value.id)}>Exp</button>
                    <button onClick={(e)=> Scroll(600,value.id)}>BMP</button>
                    <button onClick={(e)=> Scroll(900,value.id)}>Abilities</button>
                </div>
                <div className='description' id={value.id}>
                    
                    <div>
                    <p>{value.name}</p>
                    </div>
                    <div>
                        <p>Base Exp: { value.base_experience }</p>
                    </div>

                    <div className='duo'>
                        <p>Weight: { value.weight}</p>
                        <p>Height: { value.height}</p>
                    </div>

                    <div className='duo'>
                        {    value.ability.map(val=><p>{ val }</p>)   }
                    </div>
                </div>
            </div>
    }
            
            
            </>

        ))
    }


  return (
    <div className='Pokemons'>
        { Display() }
    </div>
  )
}
