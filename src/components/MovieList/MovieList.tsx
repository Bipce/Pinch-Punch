import { useEffect, useState } from "react";
import { getGenres } from "../../services/backend.js";
import { IGenre } from "../../models/IGenre.js";
import MoviesListGenre from "../MoviesListGenre/MoviesListGenre.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./MovieList.css";

const MovieList = () => {
  const [genres, setGenres] = useState<IGenre[]>();
  // const [movies, setMovies] = useState<IMovie[]>();
  // const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      setGenres(await getGenres());
    })();
  }, []);

  // const loadMovies = async () => {
  //   const res = await getMovies(page);

  //   const tmp: IMovie[] = [...(movies || []), ...res];
  //   tmp.concat(res);

  //   setMovies(tmp);

  //   if (page < 10) {
  //     setPage(page + 1);
  //   }
  // };

  // useEffect(() => {
  //   loadMovies();
  // }, [page]);

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
