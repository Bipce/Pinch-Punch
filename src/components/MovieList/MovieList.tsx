import { useEffect, useState } from "react";
import { getGenres } from "../../services/backend.js";
import { IGenre } from "../../models/IGenre.js";
import MoviesListGenre from "../MoviesListGenre/MoviesListGenre.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./MovieList.css";

const MovieList = () => {
  const [genres, setGenres] = useState<IGenre[]>();

  useEffect(() => {
    (async () => {
      setGenres(await getGenres());
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

      {genres?.map((genre) => (
        <MoviesListGenre key={genre.id} genre={genre} />
      ))}
    </>
  );
};

export default MovieList;
