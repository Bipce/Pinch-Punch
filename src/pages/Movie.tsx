import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MovieContext } from "../contexts/MovieContext";
import { getMovie, getCredits } from "../services/backend";
import MovieDetails from "../components/MovieDetails/MovieDetails";

import { ICast } from "../models/Credits/ICast";
import { ICrew } from "../models/Credits/ICrew";
import { IMovie } from "../models/Movie(s)/IMovie";

const Movie = () => {
  const [movie, setMovie] = useState<IMovie>();
  const [cast, setCast] = useState<ICast[]>();
  const [crew, setCrew] = useState<ICrew[]>();

  const { id } = useParams<{ id: string }>();

  if (id == undefined) return null;

  useEffect(() => {
    (async () => {
      const credits = await getCredits(parseInt(id));
      setMovie(await getMovie(parseInt(id)));

      if (credits) {
        setCast(credits.cast);
        setCrew(credits.crew);
      }
    })();
  }, []);

  if (!movie || !cast || !crew) return null;

  return <MovieDetails movie={movie} cast={cast} crew={crew} />;
};

export default Movie;
