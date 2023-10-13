import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";
import { Environment } from "../../environment";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadMovie() {
    const response = await api.get("movie/now_playing", {
      params: {
        api_key: Environment.API_KEY,
        language: "pt-BR",
        page: 1,
      },
    });

    setMovies(response.data.results);
    setLoading(false);
  }

  useEffect(() => {
    loadMovie();
  }, []);

  return (
    <section className="container">
      {loading && (
        <div className="loading">
          <h5>Carregando filmes...</h5>
        </div>
      )}

      {!loading && (
        <div className="lista-filmes">
          {movies.map((movie) => (
            <div key={movie.id}>
              <strong>
                <h4>{movie.title}</h4>
              </strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <Link to={`/filme/${movie.id}`}>Acessar</Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
