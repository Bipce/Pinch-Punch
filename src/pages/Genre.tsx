import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesGenre from "../components/MoviesGenre/MoviesGenre";
import { IGenre } from "../models/IGenre";
import { IMovie } from "../models/IMovie";
import { getGenres, getMovies } from "../services/backend";

const Genre = () => {
  const [genre, setGenre] = useState<IGenre[]>();
  // const [movies, setMovies] = useState<IMovie[]>();

  let { id } = useParams();

  console.log(id);

  useEffect(() => {
    async () => {
      setGenre(await getGenres());
    };
  }, []);

  return <MoviesGenre />;
};

export default Genre;
