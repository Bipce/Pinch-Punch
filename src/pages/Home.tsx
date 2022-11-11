import { useContext, useEffect, useState } from "react";
import MoviesListGenre from "../components/MoviesListGenre/MoviesListGenre";
import { MovieContext } from "../contexts/MovieContext";
import { IGenre } from "../models/Genre/IGenre";
import { IMovie } from "../models/Movie(s)/IMovie";

const Home = () => {
  const movieContext = useContext(MovieContext);

  const onScrollMax = (genre: IGenre) => {
    movieContext.loadNextMovies(genre);
  };

  if (movieContext.movies.size == 0) return;

  return (
    <>
      <div className="scroll-container">
        {[...movieContext.movies.entries()].map(([genre, movies]) => {
          return <MoviesListGenre key={genre.id} genre={genre} movies={movies} onScrollMax={onScrollMax} />;
        })}
      </div>
    </>
  );
};

export default Home;
