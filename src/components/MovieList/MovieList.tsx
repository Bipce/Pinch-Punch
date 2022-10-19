import { useEffect, useState } from "react";
import { getGenres, getMovies } from "../../services/backend.js";

import { IGenre } from "../../models/IGenre.js";
import { IMovie } from "../../models/IMovie.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./MovieList.css";

const MovieList = () => {
  const [genres, setGenres] = useState<IGenre[]>();
  const [movies, setMovies] = useState<IMovie[]>();

  useEffect(() => {
    (async () => {
      setGenres(await getGenres());
      setMovies(await getMovies());
    })();
  }, []);

  return (
    <div className="main">
      <div className="search-sort flex-row">
        <div className="search center">
          <input id="search__movie" type="text" placeholder="Movie" className="btn fs-text bkg-primary " />
          <button className="btn bkg-dark fs-text">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <select className="sort-select">
          <option></option>
        </select>
      </div>

      <div>
        <div>
          {genres?.map((genre) => (
            <h2 key={genre.id} className="second-title">
              {genre.name} :
              <div>
                {movies?.map((movie) => {
                  if (movie.genre_ids.includes(genre.id)) {
                    return (
                      <div key={movie.id}>
                        <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} />
                        <h3>{movie.title}</h3>
                      </div>
                    );
                  }
                })}
              </div>
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
