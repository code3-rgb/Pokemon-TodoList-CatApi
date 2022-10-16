import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
// import { Spinner } from 'loading-animations-react'
import { StickyBallLoading } from 'react-loadingg';

const initialState = {
  data: [],
  loading: true,
  error: null
}
const reducer = (state,action)=>{
  console.log(action.payload)

  switch(action.type) {
    case 'save':
      return {
        data: action.payload,
        loading: false,
        error: null,
      }
    case 'error':
      return {
        data: [],
        loading:true,
        error: action.payload,
      }

    default: 
     return state

  }
}

export const Json = () => {

  const [state,dispatch] = useReducer(reducer,initialState)

  useEffect(()=> {
    const Api = async ()=>{
      try {
        const api = await axios('https://jsonplaceholder.typicode.com/todos/')
        dispatch({ type:'save',payload: api.data })
      } catch (error) {
        dispatch({ type:'error',payload: error.message })
      } 
    }
    Api()
  },[])

  useEffect(()=>{
    console.log(state)
  },[state.completed])
  console.log(state)

  if(state.error) {
    return(
      <h1 style={{ color:'red' }}>
        { state.error }
      </h1>
    )
  }

  return (

    <div className='json-all'>

      { 

        state.loading ?<StickyBallLoading size='large' />: state.data.map(val=>(

          <div className='json'>
            <h1>{val.title}</h1>
            <h1>{val.id}</h1>
            <button onClick={(e)=> !val.completed}>Complete</button>
          </div>

        ))

      }

    </div>

  )
}
