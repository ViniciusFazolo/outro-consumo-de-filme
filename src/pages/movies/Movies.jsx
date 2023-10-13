import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import "./style.css";
import { toast } from "react-toastify";
import { Environment } from "../../environment";

export function Movies() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  
  useEffect(() => {
    async function loadMovie() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: Environment.API_KEY,
            language: "pt-BR",
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch((error) => {
          navigate("/");
        });
    }
    loadMovie();
  }, [id, navigate]);

  function handleSave() {
    const minhaLista = localStorage.getItem('@primeflix')   
    let filmesSalvos = JSON.parse(minhaLista) || []

    const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === movie.id)
    if(hasFilme){
      toast.warn('Esse filme já está na sua lista!')
      return
    } 
      
    filmesSalvos.push(movie)
    localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos))
    toast.success('Filme salvo com sucesso!')
  }

  return (
    <div className="movie-detail">
      {loading && (
        <div className="loading">
          <h5>Carregando detalhe...</h5>
        </div>
      )}

      {!loading && (
        <>
          <strong>
            <h4>{movie.title}</h4>
          </strong>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>Sinopse</h3>
          <p>{movie.overview}</p>
          <strong>Avaliação: {movie.vote_average} / 10</strong>
          <div className="btns">
            <button onClick={handleSave}>Salvar</button>
            <button>
              <a href={`https://www.youtube.com/results?search_query=${movie.title} Trailler`} target="blank" rel="external">Trailler</a>
            </button>
          </div>
          <Link to={"/outro-consumo-de-filme"} className="back">
            Voltar para filmes
          </Link>
        </>
      )}
    </div>
  );
}
