import { useEffect, useState } from "react";
import { getGenres, getMovies } from "../../services/backend.js";

import { IGenre } from "../../models/IGenre.js";
import { IMovie } from "../../models/IMovie.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./MovieList.css";
import { Link } from "react-router-dom";

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
    <>
      <div className="search-sort flex-row main">
        <div className="search center">
          <label htmlFor="serch__movie" />
          <input id="search__movie" type="text" placeholder="Movie" className="btn fs-text bkg-primary" />
          <button className="btn fs-text button-icon">
            <FontAwesomeIcon className="loop-icon" icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>

      {genres?.map((genre) => {
        return (
          <div key={genre.id} className="genre-box">
            <Link to={`./genres/${genre.name}`}>
              <h2 className="second-title">{genre.name} :</h2>
            </Link>

            <div className="flex-row movies-box horizontal-scroll-wrapper">
              {movies?.map((movie) => {
                if (movie.genre_ids.includes(genre.id)) {
                  return (
                    <div key={movie.id} className="image-box">
                      <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} />
                      <h3 className="movie-title">{movie.title}</h3>
                    </div>
                  );
                }
              })}
              {/* <FontAwesomeIcon icon={faChevronRight} size="5x" className="slide-arrow" /> */}
            </div>
            <div className="m0">
              <span className="line"></span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
