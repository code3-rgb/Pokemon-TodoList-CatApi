import './todo.css'
import { TodoContext } from '../Context/TodoContext'
import { useEffect, useReducer, useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { Display } from './Display'
import moment from 'moment'

const ACTION = {
    'ADDTODO': "ADDTODO",
    'EDIT': "EDIT",
    'DELETE': 'DELETE',
}

const initialState = []

const reducer = (state,action)=>{
    console.log(action.payload)
    switch(action.type) {
        case ACTION.ADDTODO:
            return [ ...state,action.payload ]
        case ACTION.EDIT:
            return action.payload
        case ACTION.DELETE:
            return state.filter(todo=> todo.id !== action.payload)

        default: return ['not working']
    }
}

export const Todo = () => {

    const [state,dispatch] = useReducer(reducer,initialState)


    const [change,onChange] = useState('')
    const submit = ()=>{
        if(change === '')   return 
        dispatch({ type: ACTION.ADDTODO,payload: { id: nanoid(),title: change, time: new Date().toISOString()
        } })
        onChange('')
    }   


  return (

    <TodoContext.Provider value={ { state,dispatch } }>
    <div className='todo-app'>
        <div className='todo-input'>
            <input value={change} onChange={(e)=>onChange(e.target.value)}  />
            <button onClick={(e)=> submit()}> Save</button>
        </div>
        <div className='todos'>
            <Display />
        </div>
    </div>
    </TodoContext.Provider>


  )
}
