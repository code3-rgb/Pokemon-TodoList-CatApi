import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../Context/TodoContext'
import moment from 'moment'
import { formatDistanceToNow, parseISO } from 'date-fns'


export const Display = () => {

    const {state,dispatch} = useContext(TodoContext)
    const [change,onChange] = useState('')
    const [bool,setBool] = useState(false)


    const Edit = (e,id,valId)=>{
        const input = document.getElementById(id)
        const h1 = document.getElementsByClassName(id)[0]


        if(bool && e.target.innerText === 'Edit')   return
        setBool(true)

        if(input.className === 'hide') {
            input.value = 'hello'
            e.target.innerText = 'Save'
            input.className = 'unhide'
            h1.style.display = 'none'
            
            return
        }   else {
            input.className = 'hide'
            h1.style.display = 'block'
            e.target.innerText = 'Edit'
        }
        setBool(false)


        const allTodos = []
        state.filter(todo=> {
            if(todo.id !== valId){
                allTodos.push(todo)
            }
        })
        const newTodo = { id:valId,title: change,time: new Date().toISOString() }
        allTodos.push(newTodo)
        dispatch({type: 'EDIT',payload: allTodos})
        console.log(allTodos)
        onChange('')
    }

    const parseTime = (timestamp)=>{
        let timeago = ''
        if(timestamp) {
            const date = parseISO(timestamp)
            const timePeriod = formatDistanceToNow(date)
            timeago += timePeriod
        }
        return timeago

    }


  return (
    <>
    {
        state[0] ? state.map((val,id)=>(
            <div key={id} className='todo'>
                <p className={id}>{val.title}</p>
                <input className='hide' value={change} id={id} onChange={ e=> onChange(e.target.value) } />
                <div className='buttons'>
                    <button onClick={(e)=> Edit(e,id,val.id)}>Edit</button>
                    <button onClick={(e)=> dispatch({ type:'DELETE',payload:val.id }) }>Delete</button>
                </div>
                <p className='time'>{ parseTime(val.time) } ago</p>
            </div>
        )): <h1>No Todos</h1>
    }

    </>
  )
}
