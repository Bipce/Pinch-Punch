import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import { ICast } from "../models/Credits/ICast";
import { ICrew } from "../models/Credits/ICrew";
import { IMovie } from "../models/Movie(s)/IMovie";
import { getMovie, getCredits } from "../services/backend";

const Movie = () => {
  const [movie, setMovie] = useState<IMovie>();
  const [cast, setCast] = useState<ICast>();
  // const [crew, setCrew] = useState<ICrew>();

  const { id } = useParams<{ id: string }>();

  if (id == undefined) return null;

  useEffect(() => {
    (async () => {
      const credits = getCredits(parseInt(id));
      setMovie(await getMovie(parseInt(id)));

      if (credits) {
        setCast(credits.cast);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {})();
  });

  if (!movie || cast) return null;

  return <MovieDetails movie={movie} />;
};

export default Movie;
