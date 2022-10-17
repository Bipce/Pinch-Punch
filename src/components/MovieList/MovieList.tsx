import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { getGenres, getMovies } from "../../services/backend.js";

import { IGenre } from "../../models/IGenre.js";
import "./MovieList.css";

const MovieList = () => {
  const [genres, setGenres] = useState<IGenre[]>();

  useEffect(() => {
    (async () => {
      console.log(await getMovies());
      setGenres(await getGenres());
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
            </h2>
          ))}
          {/* Movie */}
          {/* Movie */}
          {/* Movie */}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
