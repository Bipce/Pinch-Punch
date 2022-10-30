import { useEffect, useState } from "react";
import { getGenres } from "../../services/backend.js";
import { IGenre } from "../../models/IGenre.js";

import MoviesListGenre from "../MoviesListGenre/MoviesListGenre.js";

const MovieList = () => {
  const [genres, setGenres] = useState<IGenre[]>();

  useEffect(() => {
    (async () => {
      setGenres(await getGenres());
    })();
  }, []);

  return (
    <>
      <div className="scroll-container">
        {genres?.map((genre) => (
          <MoviesListGenre key={genre.id} genre={genre} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
