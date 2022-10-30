import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IGenre } from "../../models/IGenre";
import { IMovie } from "../../models/IMovie";
import { getMovies } from "../../services/backend";

import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "./MoviesListGenre.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  genre: IGenre;
}

const MoviesListGenre: React.FC<IProps> = ({ genre }) => {
  const [movies, setMovies] = useState<IMovie[] | null>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollMax, setScrollMax] = useState(0);
  const [page, setPage] = useState(1);

  const slideElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollLeft != 0) slide(1);
  }, [movies]);

  useEffect(() => {
    if (slideElement.current != null) {
      setScrollMax(slideElement.current.scrollWidth - slideElement.current.clientWidth);
    }
  }, [slideElement.current, movies]);

  useEffect(() => {
    loadNextMovies();
  }, [page]);

  const slide = (delta: number) => {
    slideElement.current?.scrollTo({
      behavior: "smooth",
      left: slideElement.current.scrollLeft + slideElement.current.offsetWidth * delta,
    });
  };

  const loadNextMovies = async () => {
    const res = await getMovies(genre.id, page);

    const tmp: IMovie[] = [...(movies || []), ...res];
    tmp.concat(res);

    setMovies(tmp);
  };

  return (
    <div key={genre.id} className="genre-box">
      <Link to={`./genres/${genre.id}`}>
        <h2 className="genre-box__title fz2">{genre.name} :</h2>
      </Link>

      <div className="movies-box mlr2">
        <div
          className="movies-box__arrow movies-box__arrow-left movies-box__hover "
          style={{
            visibility: scrollLeft == 0 ? "collapse" : "visible",
          }}
        >
          <button className="slide color-primary" onClick={() => slide(-1)}>
            <FontAwesomeIcon icon={faChevronLeft} size="5x" className="slide-arrow__left" />
          </button>
        </div>

        <div
          className="movies-box__movies"
          ref={slideElement}
          onScroll={(e) => {
            setScrollLeft(e.currentTarget.scrollLeft);
          }}
        >
          {movies?.map((movie) => {
            return (
              <div key={movie.id} className="movies-box__movies-image">
                <Link to="./movie/:id">
                  <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} />
                  <h3 className="movie-title fz2">{movie.title}</h3>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="movies-box__arrow movies-box__arrow-right">
          <button
            className="slide color-primary"
            onClick={async () => {
              if (scrollLeft >= scrollMax) {
                setPage((prev) => prev + 1);
              } else {
                slide(1);
              }
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} size="5x" className="slide-arrow__right" />
          </button>
        </div>
      </div>
      <div className="movies-box__line"></div>
    </div>
  );
};

export default MoviesListGenre;
