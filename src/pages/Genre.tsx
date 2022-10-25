import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesGenre from "../components/MoviesGenre/MoviesGenre";
import { IMovie } from "../models/IMovie";
import { getGenres, getMovies } from "../services/backend";

const Genre = () => {
  const [movies, setMovies] = useState<IMovie[]>();
  const [genreNotFound, setGenreNotFound] = useState(false);

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

  if (genreNotFound) {
    return <h1>Genre not found !</h1>;
  }

  if (!movies) return null;

  return <MoviesGenre movies={movies} />;
};

export default Genre;
