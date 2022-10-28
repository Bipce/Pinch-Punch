import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getGenres, getMovies } from "../services/backend";
import { IMovie } from "../models/IMovie";
import MoviesGenre from "../components/MoviesGenre/MoviesGenre";

const Genre = () => {
  const [movies, setMovies] = useState<IMovie[]>();
  const [genreNotFound, setGenreNotFound] = useState(false);
  const [page, setPage] = useState(1);

  const { id } = useParams<{ id: string }>();

  if (id == undefined) return null;

  useEffect(() => {
    (async () => {
      const genres = await getGenres();

      const genre = genres?.find((g) => g.id == parseInt(id));

      if (genre) {
        setMovies(await getMovies(parseInt(id)));
      } else {
        setGenreNotFound(true);
      }
    })();
  }, []);

  useEffect(() => {
    loadNextMovies();
  }, [page]);

  const loadNextMovies = async () => {
    const genres = await getGenres();
    genres.map(async (genre) => {
      const res = await getMovies(genre.id, page);

      const tmp: IMovie[] = [...(movies || []), ...res];
      tmp.concat(res);

      setMovies(tmp);
    });
  };

  if (genreNotFound) {
    return <h1>Genre not found !</h1>;
  }

  if (!movies) return null;

  return (
    <>
      <button
        onClick={async () => {
          setPage((prev) => prev + 1);
        }}
      >
        Click1
      </button>
      <MoviesGenre movies={movies} page={page} />
    </>
  );
};

export default Genre;
