import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IGenre } from "../../models/IGenre";
import { IMovie } from "../../models/IMovie";

import "./MoviesGenre.css";

interface IProps {
  movies: IMovie[];
  genre: IGenre;
}

const MoviesGenre: React.FC<IProps> = ({ movies, genre }) => {
  console.log(genre);
  console.log("test");

  const [scrollDown, setScrollDown] = useState(0);

  const slideElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slideElement.current != null) {
      setScrollDown(slideElement.current.scrollHeight - slideElement.current.clientHeight);
    }
  }, []);

  const slideDown = () => {
    document.body.scrollTo({
      behavior: "smooth",
      left: document.body.scrollHeight + document.body.offsetHeight,
    });
  };

  return (
    <>
      <h2 className="moviesGenre__title fz2">{genre.name}</h2>
      {/* <button
        onClick={(e) => {
          slideDown();
        }}
      >
        Onclick
      </button> */}
      {movies.map((movie) => {
        return (
          <Link to="./movie/:id" key={movie.id} className="moviesGenre-box__link">
            <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} className="moviesGenre-box__image" />
            <h3 className="movie-title moviesGenre-box__title">{movie.title}</h3>
          </Link>
        );
      })}
    </>
  );
};

export default MoviesGenre;
