import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Error, Favorito, Home, Movies} from '../pages'

function RoutesApp() {
  return (
    <Routes>
      <Route path='/outro-consumo-de-filme' element={<Home/>}/>
      <Route path='/filme/:id' element={<Movies/>}/>
      <Route path='/favoritos' element={<Favorito />}/>
      
      <Route path='*' element={<Error/>}/>
    </Routes>
  )
}

export default RoutesApp