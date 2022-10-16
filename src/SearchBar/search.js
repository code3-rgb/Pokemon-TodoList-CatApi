import React, { useState } from 'react'
import { SearchContext } from '../Context/SearchContext'
import { SearchInput } from './searchInput'
import './search.css'

export const Search = () => {

    const [state,setState] = useState([
        {firstName:'John'},
        {firstName:'Peter'},
        {firstName:'Johnathan'},
        {firstName:'Mark'},
        {firstName:'Oliver'},
        {firstName:'Olive'},
        {firstName:'Ron'},
        {firstName:'Parker'},
        {firstName:'Markson'},
        {firstName:'Peterson'},
        {firstName:'Ronny'},
        {firstName:'Johnny'},
        {firstName:'Jones'},
        {firstName:'Proper'},
        {firstName:'Yessy'},
        {firstName:'Yes'},
        {firstName:'Jessie'},
        {firstName:'Johns'},
        {firstName:'Abra'},
        {firstName:'Jab'},
        {firstName:'Peterson'},
        {firstName:'Zack'},
        {firstName:'Sham'},
        {firstName:'Ham'},
        {firstName:'Japy'},
        {firstName:'Yolo'},
        {firstName:'Marky'},
        {firstName:'Mars'},
        {firstName:'Bruno'},
        {firstName:'Brethe'},
        {firstName:'Yummy'},
        {firstName:'Yum'},
        {firstName:'Chinese'},
        {firstName:'Japanese'},
        {firstName:'Lease'},
        {firstName:'York'},
        {firstName:'Pork'},
        {firstName:'JungleBook'},
        {firstName:'Port'},
        {firstName:'Yesir'},
        {firstName:'Nooo'},
        {firstName:'Nope'},
        {firstName:'Noob'},
        {firstName:'Email'},
        {firstName:'Yup'} 
    ])


  return (
    <SearchContext.Provider value={{state,setState}}>
        <div>

            <div>
                <SearchInput />
            </div>

        </div>
    </SearchContext.Provider>
  )
}
