import React, { useContext,useEffect,useState } from 'react'
import { SearchContext } from '../Context/SearchContext'

export const SearchInput = () => {

    const {state,setState} = useContext(SearchContext)
    const [firstName,setFirstName] = useState([])

    useEffect(()=>{

    },[firstName])
   
    let firstNames = []
    const onChange = (e)=>{
        state.filter(val=>{
            if(val.firstName.indexOf(e.target.value) > -1) {
                firstNames.push(val)
            } 
        })
        setFirstName(firstNames)
        firstNames = []

    }

  return (
    <div className='search'>

        <div className='search-input'>
            <input onChange={(e)=> onChange(e)}/>
        </div>
        <div className='search-box'>
            {
               firstName[0] ? firstName.map(val=>(
                    <h1>{ val.firstName }</h1>
                )) : <h1>No Result</h1>
            }
        </div>

    </div>
  )
}
