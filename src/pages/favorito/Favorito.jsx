import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import { toast } from "react-toastify";

export function Favorito() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@primeflix");
    setMovies(JSON.parse(myList) || []);
  }, []);

  function handleRemove(id){
    const filmeAtualizado = movies.filter(movie => movie.id !== id)

    setMovies(filmeAtualizado)
    toast.success('Filme removido com sucesso!')
    localStorage.setItem('@primeflix', JSON.stringify(filmeAtualizado))
  }

  return (
    <div className="meus-filmes">

      <h1>Meus filmes favoritos</h1>
        {movies.length === 0 && <span className="empty">Sua lista está vazia :(</span>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <span>{movie.title}</span>
            <div className="actions">
              <Link to={`/filme/${movie.id}`}>Ver detalhes</Link>
              <button className="excluir" onClick={()=>handleRemove(movie.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
