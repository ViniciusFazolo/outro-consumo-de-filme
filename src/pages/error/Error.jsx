import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export function Error() {
  return (
    <div className='not-found'>
        <h1>404</h1>
        <h2>Pagina não encontrada</h2>
        <Link to={'/'}>Veja todos os filmes</Link>
    </div>
  )
}

