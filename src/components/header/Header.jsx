import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
        <Link className='logo' to={'/'}>Prime Flix</Link>
        <Link className='favoritos' to={'/favoritos'}>Meus filmes</Link>
    </header>
  )
}