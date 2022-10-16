import React from 'react'
import { Link } from 'react-router-dom'
import './Links.css'

export const Links = () => {
  return (
    <div className='links'>
        <Link to="/Todo">Todo</Link> 
        <Link to="/pokemon">Pokemon</Link> 
        <Link to="/Json">Json</Link> 
        <Link to="/Search">Search</Link> 
        <Link to="/Invoice">Invoice</Link> 
    </div>


  )
}
