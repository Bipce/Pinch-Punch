import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { getGenres, getMovies } from "../services/backend";
import { IMovie } from "../models/Movie(s)/IMovie";
import MoviesGenre from "../components/MoviesGenre/MoviesGenre";

import "../components/MoviesGenre/MoviesGenre.css";
import { IGenre } from "../models/Genre/IGenre";

const Genre = () => {
  const [movies, setMovies] = useState<IMovie[]>();
  const [genreNotFound, setGenreNotFound] = useState(false);
  const [genre, setGenre] = useState<IGenre>();
  const [page, setPage] = useState(1);

  const { id } = useParams<{ id: string }>();

  if (id == undefined) return null;

  useEffect(() => {
    (async () => {
      const genres = await getGenres();
      const genre = genres.find((g) => g.id == parseInt(id));
      setGenre(genre);

      if (genre) {
        setMovies(await getMovies(parseInt(id)));
      } else {
        setGenreNotFound(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (genre != null) {
      loadNextMovies();
    }
  }, [page, genre]);

  const loadNextMovies = async () => {
    const res = await getMovies(genre!.id, page);

    const tmp: IMovie[] = [...(movies || []), ...res];
    tmp.concat(res);

    setMovies(tmp);
  };

  if (genreNotFound) {
    return <h1 className="not-found flex-center bg-tertiary">Genre not found !</h1>;
  }

  if (!movies || !genre) return null;

  return (
    <>
      <div
        className="scroll-container moviesGenre-box"
        onScroll={(e) => {
          if (e.currentTarget.scrollTop == e.currentTarget.scrollHeight - e.currentTarget.offsetHeight) {
            setPage((prev) => prev + 1);
          }
        }}
      >
        <MoviesGenre movies={movies} genre={genre} />
      </div>
    </>
  );
};

export default Genre;
