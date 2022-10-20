import { useState } from "react";
import MoviesGenre from "../components/MoviesGenre/MoviesGenre";

const Genre = () => {
  const [genre, setGenre] = useState();

  return <MoviesGenre />;
};

export default Genre;
